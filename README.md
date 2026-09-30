# Calcula Chile

Sitio estático de calculadoras para Chile (sueldo, finiquito, honorarios, IVA, hipotecario, PAES…). Sin dependencias ni paso de compilación en el hosting.
La marca está descrita en [BRAND.md](BRAND.md): tema oscuro único, nunca fondo blanco.

## Desarrollo local
```
node scripts/serve.mjs        # http://localhost:8765 (sin caché)
node scripts/build.mjs        # regenera menú, fichas, versión de assets y sitemap.xml
node scripts/update-data.mjs  # baja UF, UTM, dólar y feriados
```
Después de editar textos o agregar una calculadora (`scripts/tools.mjs` + su carpeta con `index.html`), ejecuta `build.mjs` antes de subir.

## Publicar en Cloudflare Pages (gratis)
1. Sube el repositorio a GitHub (ver abajo).
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → elige el repositorio.
3. *Framework preset:* None · *Build command:* (vacío) · *Build output directory:* `/`.
4. **Custom domains** → agrega tu dominio (para `.cl`, cambia los DNS en NIC Chile a los que te indique Cloudflare).
5. Pon tu dominio en los archivos: `node scripts/set-domain.mjs midominio.cl`, luego commit y push.
6. Search Console → agrega el sitio y envía `https://midominio.cl/sitemap.xml`.
7. Cuando tengas 20-30 páginas con algo de tráfico, postula a AdSense y pega su script donde dice `<!-- ADSENSE -->`.

## Subir a GitHub
```
git remote add origin https://github.com/TU_USUARIO/calculadoras-chile.git
git push -u origin main
```

## Actualización automática
`.github/workflows/update-data.yml` corre a diario: baja los indicadores, regenera las páginas y hace commit; Cloudflare vuelve a publicar solo.
En **Settings → Actions → General → Workflow permissions** debe estar en *Read and write*.

## Revisión anual (enero-febrero)
- Tope imponible (90 UF) y tope AFC (135,2 UF), comisiones AFP y SIS: `sueldo-liquido/index.html`, `finiquito/index.html`.
- UTM de enero del permiso de circulación: `permiso-circulacion/index.html`.
- Retención de honorarios (16% en 2027, 17% en 2028): `honorarios/index.html`.
- Tasa promedio hipotecaria de ejemplo: `credito-hipotecario/index.html`.

## Próximas calculadoras
Pensión de alimentos · crédito automotriz · UTM a pesos por mes · validador de RUT · reajuste de arriendo por IPC · dividendo con subsidio.
