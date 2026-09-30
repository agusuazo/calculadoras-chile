// Inserta en cada página el menú, las fichas, los indicadores y la versión de los assets.
// Es idempotente: se puede ejecutar todas las veces que haga falta.  Uso: node scripts/build.mjs
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { TOOLS, svg, LOGO } from "./tools.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => readFile(path.join(root, f), "utf8");
const ind = JSON.parse(await read("data/indicadores.json"));
const money = (n) => "$" + n.toLocaleString("es-CL", { maximumFractionDigits: 2 });
const ver = async (f) => createHash("md5").update(await read(f)).digest("hex").slice(0, 8);
const [vCss, vJs] = [await ver("assets/style.css"), await ver("assets/common.js")];

const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Onest:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Unbounded:wght@500;700&display=swap" rel="stylesheet">';
const year = new Date().getFullYear();

const side = (here) => `<!--side-->
<aside class="side">
  <a class="brand" href="/"><span class="brand-mark">${LOGO}</span><span><b>Calcula Chile</b><small>CALCULADORAS ${year}</small></span></a>
  <div class="side-label">Calculadoras</div>
  <nav>${TOOLS.map((t) => `<a href="${t.href}"${t.href === here ? ' aria-current="page"' : ""}>${svg(t.icon)}${t.name}</a>`).join("")}</nav>
  <div class="ticker">
    <div class="t-live">EN VIVO · BANCO CENTRAL</div>
    <div class="t-row"><span>UF</span><b data-ind="uf"></b></div>
    <div class="t-row"><span>UTM</span><b data-ind="utm"></b></div>
    <div class="t-row"><span>DÓLAR</span><b data-ind="dolar"></b></div>
  </div>
</aside>
<!--/side-->`;

const card = (t, feat) => `<a href="${t.href}"${feat ? ' class="feat"' : ""}><span class="ic">${svg(t.icon)}</span><strong>${t.name}</strong><small>${t.desc}</small></a>`;

for (const here of ["/", ...TOOLS.map((t) => t.href)]) {
  const file = path.join(here, "index.html").replace(/^[\\/]/, "");
  let s = await read(file);

  // cabecera: fuentes, esquema oscuro, versión de assets
  s = s.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2[^>]+>/, FONTS);
  if (!s.includes('name="color-scheme"')) s = s.replace("<title>", '<meta name="color-scheme" content="dark">\n<meta name="theme-color" content="#0A1020">\n<title>');
  if (!s.includes('rel="icon"')) s = s.replace("<title>", '<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">\n<title>');
  s = s.replace(/\/assets\/style\.css(\?v=\w+)?/, `/assets/style.css?v=${vCss}`).replace(/\/assets\/common\.js(\?v=\w+)?/, `/assets/common.js?v=${vJs}`);

  // menú lateral + contenedor de la app
  s = s.replace(/<!--side-->[\s\S]*?<!--\/side-->\s*/, "");
  s = s.replace(/<div class="app">\s*/, "").replace(/\s*<\/div><!--\/app-->/, "");
  s = s.replace(/<body>\s*/, `<body>\n${side(here)}\n`).replace("<main>", '<div class="app">\n<main>').replace("</footer>", "</footer>\n</div><!--/app-->");

  // palabra clave del H1 en cursiva de acento
  s = s.replace(/<h1>((?:(?!<em>|<\/h1>)[\s\S])*)<\/h1>/, (m, t) => {
    const i = t.trimEnd().lastIndexOf(" ");
    return i < 0 ? m : `<h1>${t.slice(0, i)} <em>${t.slice(i + 1)}</em></h1>`;
  });

  if (here === "/") {
    s = s.replace(/<div class="tools" id="tools">[\s\S]*?<\/div>/, `<div class="tools" id="tools">${TOOLS.map((t, i) => card(t, i === 0)).join("")}</div>`);
    s = s.replace(/<script>\s*document\.getElementById\("tools"\)[\s\S]*?<\/script>\s*/, "");
  } else {
    s = s.replace(/<section class="related">[\s\S]*?<\/section>\s*/, "");
    const i0 = TOOLS.findIndex((t) => t.href === here);
    const rel = [1, 2, 3, 4].map((k) => TOOLS[(i0 + k) % TOOLS.length]); // las 4 siguientes, en círculo
    s = s.replace("</main>", `<section class="related"><h2>Otras calculadoras</h2><div class="tools">${rel.map((t) => card(t)).join("")}</div></section>\n</main>`);
  }

  // indicadores horneados en el HTML (el JS los refresca)
  s = s.replace(/(data-ind="(\w+)">)[^<]*/g, (m, a, k) => a + (ind[k] != null ? money(ind[k]) : ""));
  await writeFile(path.join(root, file), s);
  console.log("ok", here);
}

// sitemap
const urls = ["/", ...TOOLS.map((t) => t.href)];
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls.map((u) => `<url><loc>https://TUDOMINIO.cl${u}</loc></url>`), "</urlset>", ""];
await writeFile(path.join(root, "sitemap.xml"), sm.join("\n"));
