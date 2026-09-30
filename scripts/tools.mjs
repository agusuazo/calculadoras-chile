// Catálogo único de calculadoras (menú, portada, "relacionadas" y sitemap)
export const svg = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

// Logo: aro "C" abierto + estrella de Chile (mismo dibujo que assets/logo.svg)
export const LOGO = `<svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="lg" x1="8" y1="4" x2="58" y2="62" gradientUnits="userSpaceOnUse"><stop stop-color="#4764F5"/><stop offset="1" stop-color="#17278F"/></linearGradient><radialGradient id="lh" cx="20%" cy="8%" r="80%"><stop stop-color="#fff" stop-opacity=".34"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="64" height="64" rx="18" fill="url(#lg)"/><rect width="64" height="64" rx="18" fill="url(#lh)"/><circle cx="32" cy="32" r="19" fill="none" stroke="#EFE9D8" stroke-width="6" stroke-linecap="round" stroke-dasharray="97 22.4" transform="rotate(34 32 32)"/><polygon fill="#FF5470" points="32,21.5 34.6,28.4 42,28.7 36.2,33.3 38.2,40.5 32,36.3 25.8,40.5 27.8,33.3 22,28.7 29.4,28.4"/></svg>`;

export const TOOLS = [
  { href: "/sueldo-liquido/", name: "Sueldo líquido", desc: "De bruto a líquido con AFP, salud, cesantía e impuesto único", icon: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>' },
  { href: "/finiquito/", name: "Finiquito", desc: "Indemnización, aviso previo y vacaciones al terminar tu contrato", icon: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="M8 17c1.5-2 2.5 1 4 0s2-1.5 3-.5"/>' },
  { href: "/vacaciones-proporcionales/", name: "Vacaciones proporcionales", desc: "Cuántos días te corresponden y cuánto te deben pagar", icon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>' },
  { href: "/honorarios/", name: "Boleta de honorarios", desc: "Retención 15,25%: calcula bruto o líquido", icon: '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6M9 11h6M9 15h3"/>' },
  { href: "/iva/", name: "Calculadora de IVA", desc: "Agrega o quita el 19% a cualquier monto", icon: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>' },
  { href: "/credito-hipotecario/", name: "Crédito hipotecario", desc: "Dividendo en UF y pesos, renta que te pedirá el banco", icon: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>' },
  { href: "/dias-habiles/", name: "Días hábiles", desc: "Cuenta o suma días descontando feriados", icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15l2 2 4-4"/>' },
  { href: "/uf/", name: "UF hoy y conversor", desc: "UF, UTM, dólar y euro a pesos al instante", icon: '<path d="M4 7h13l-3-3M20 17H7l3 3"/>' },
  { href: "/permiso-circulacion/", name: "Permiso de circulación", desc: "Valor según tasación fiscal del SII", icon: '<path d="M5 16l1.5-5A2 2 0 0 1 8.4 9.5h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7.5" cy="20" r="1"/><circle cx="16.5" cy="20" r="1"/>' },
  { href: "/ponderacion-paes/", name: "Ponderación PAES", desc: "Tu puntaje ponderado para cualquier carrera", icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>' },
];
