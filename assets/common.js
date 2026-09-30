// Utilidades compartidas (el menú, las fichas y los indicadores iniciales los genera scripts/build.mjs)
const clp = (n) => "$" + Math.round(n).toLocaleString("es-CL");
const num = (el) => Number(String(el.value).replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".")) || 0;

const _cache = {};
function loadJSON(path) {
  return (_cache[path] ||= fetch(path, { cache: "no-cache" }).then((r) => r.json()));
}

// Refresca los indicadores con el dato más reciente
loadJSON("/data/indicadores.json").then((d) => {
  document.querySelectorAll("[data-ind]").forEach((el) => {
    if (d[el.dataset.ind] != null) el.textContent = "$" + d[el.dataset.ind].toLocaleString("es-CL", { maximumFractionDigits: 2 });
  });
}).catch(() => {});

// Formatea inputs de montos con separador de miles mientras se escribe
document.querySelectorAll("input[data-money]").forEach((el) => {
  el.addEventListener("input", () => {
    const digits = el.value.replace(/\D/g, "");
    el.value = digits ? Number(digits).toLocaleString("es-CL") : "";
  });
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
