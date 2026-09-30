# Manual de marca — Calcula Chile

## Esencia
**"Las cuentas de Chile, claras como el cielo de Atacama."**
Una herramienta seria con cara amable: precisa como un contador, cercana como un amigo que sabe de plata.
Tono: directo, chileno neutro, sin jerga legal. Tuteo. Frases cortas. Nunca "usted".

## Logo
- **Símbolo:** una "C" hecha con un aro crema abierto hacia la derecha, y dentro la estrella de Chile en Copihue. La C es la inicial de la marca; el aro abierto es el "dial" de una calculadora; la estrella, el país. Sobre baldosa Cobalto con brillo superior izquierdo. Archivo: `assets/logo.svg` (también es el favicon).
- **Wordmark:** "Calcula Chile" en Unbounded 700, mayúscula inicial, sin puntos.
- Espacio libre mínimo alrededor: la altura de la estrella. Tamaño mínimo del símbolo: 24 px.
- Al pasar el mouse la baldosa gira -8° con rebote. Nunca sobre fondo claro. Nunca deformar.

## Color (tema único: noche; **no existe versión blanca**)
| Nombre | Hex | Uso |
|---|---|---|
| Noche de Atacama | `#0A1020` | Fondo base |
| Cordillera | `#111A30` | Tarjetas |
| Ladera | `#18233F` | Superficies elevadas, hover |
| Salar | `#EFE9D8` | Texto principal (crema, jamás blanco puro) |
| Bruma | `#A9AEC0` | Texto secundario |
| Copihue | `#FF5470` | Acento principal: enlaces, foco, estrella, énfasis |
| Cobalto | `#2F4FE6` → `#1A2C9C` | Panel de resultados, estrella del logo, tarjeta destacada |
| Oro de Atacama | `#FFC53D` | Cifras y totales |
| Pacífico | `#3DDBC0` | Estados "en vivo" y positivos |

Reglas: máximo 2 acentos por pantalla (Copihue + Oro). Los resultados siempre en Cobalto con cifra en Oro.
Contraste mínimo AA (4,5:1) para texto normal. Prohibido: fondo blanco, texto negro, degradados púrpura.

## Tipografía
| Rol | Fuente | Uso |
|---|---|---|
| Titulares | **Instrument Serif** 400 (+ cursiva en Copihue para la palabra clave) | H1, H2 |
| Texto | **Onest** 400/500/600/700 | Párrafos, formularios, menú |
| Cifras | **Geist Mono** 400-600 | Montos, UF, tablas |
| Marca | **Unbounded** 500/700 | Wordmark y títulos de tarjeta |

Escala: H1 `clamp(2.6rem, 4.6vw, 4.2rem)` · H2 `1.9rem` · texto `1.03rem` · etiqueta `.72rem` mayúsculas con tracking.

## Forma y espacio
- Radios: 22 px tarjetas, 14 px controles, 999 px píldoras.
- Grilla: 8 px. Contenido máx. 1320 px (1440 px en pantallas ≥1600).
- Menú lateral 272 px en escritorio; barra superior con píldoras bajo 960 px.
- Sombras suaves y de color (glow), nunca grises duras.

## Componentes
1. **Tarjeta de entrada:** fondo Cordillera, borde fino, campos oscuros con foco Copihue.
2. **Panel de resultado:** Cobalto, estrella-marca de agua, cifra total en Oro (Unbounded). Fijo al hacer scroll en escritorio.
3. **Ficha de herramienta:** ícono en baldosa, título Unbounded, flecha que avanza al hover. La primera va destacada en Cobalto.
4. **Indicador en vivo:** punto Pacífico que late + UF, UTM, dólar en Geist Mono.
5. **Pregunta frecuente:** acordeón con "+" Copihue.

## Movimiento
Una sola coreografía de carga (entrada escalonada de 60 ms). Micro-interacciones solo en hover y foco.
Respeta `prefers-reduced-motion`.

## Voz — ejemplos
- ✅ "Tu líquido es **$973.347**." ❌ "El monto neto resultante asciende a…"
- ✅ "Cálculo referencial. Verifica con el SII." ❌ "Este sitio no se hace responsable…"
