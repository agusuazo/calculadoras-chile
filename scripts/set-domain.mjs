// Reemplaza el dominio de ejemplo por el tuyo en canonical, sitemap y robots.
// Uso: node scripts/set-domain.mjs midominio.cl   (vuelve a ejecutarlo con el dominio anterior como 2º argumento para cambiarlo)
import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const [nuevo, viejo = "TUDOMINIO.cl"] = process.argv.slice(2);
if (!nuevo || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(nuevo)) {
  console.error("Uso: node scripts/set-domain.mjs midominio.cl");
  process.exit(1);
}
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let n = 0;
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (/\.(html|xml|txt|md)$/.test(e.name)) {
      const s = await readFile(p, "utf8");
      if (s.includes(viejo)) { await writeFile(p, s.replaceAll(viejo, nuevo)); n++; }
    }
  }
}
await walk(root);
console.log(`Dominio ${viejo} -> ${nuevo} en ${n} archivos`);
