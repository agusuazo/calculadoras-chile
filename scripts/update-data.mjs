// Actualiza data/indicadores.json y data/feriados.json desde APIs públicas.
// Uso: node scripts/update-data.mjs  (Node 18+, sin dependencias)
import { writeFile } from "node:fs/promises";

const get = async (url) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} -> ${r.status}`);
  return r.json();
};

const m = await get("https://mindicador.cl/api");
const indicadores = {
  actualizado: new Date().toISOString(),
  uf: m.uf.valor,
  utm: m.utm.valor,
  dolar: m.dolar.valor,
  euro: m.euro.valor,
  fechaUf: m.uf.fecha.slice(0, 10),
  fechaUtm: m.utm.fecha.slice(0, 10),
};
await writeFile("data/indicadores.json", JSON.stringify(indicadores, null, 2));

const year = new Date().getFullYear();
const feriados = {};
for (const y of [year - 1, year, year + 1]) {
  try {
    const list = await get(`https://date.nager.at/api/v3/PublicHolidays/${y}/CL`);
    // Solo feriados nacionales (excluye regionales como el de Arica)
    feriados[y] = list.filter((h) => h.global).map((h) => ({ fecha: h.date, nombre: h.localName }));
  } catch (e) {
    console.warn("Sin feriados para", y, e.message);
  }
}
await writeFile("data/feriados.json", JSON.stringify(feriados, null, 2));
console.log("OK", indicadores);
