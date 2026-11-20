# Sincronización con la versión publicada de Nexo

Referencia: https://nexo-commerce-fader.web.app/, consultada el 10 de noviembre de 2026.

El repositorio contenía una versión anterior a la publicada. También se verificó el repositorio de origen citado en el README anterior, `nowymusic1-beep/Nexo`: su rama principal no contenía las últimas modificaciones del sitio.

## Procedencia

La publicación no expone mapas de código fuente. Se recuperó su lógica de aplicación como JSX editable, se asignaron nombres descriptivos a los componentes y se conservaron React, Lucide y el lector Excel como dependencias npm, sin incluir sus copias compiladas en el código fuente.

El archivo anterior `src/App.tsx` se sustituye por `src/App.jsx`. TypeScript permite importar ese módulo JavaScript mediante `allowJs`; la entrada sigue siendo `src/main.tsx`. El lector Excel usa la exportación pública `readSheet` de `read-excel-file/browser` compatible con la versión instalada.

Artefactos utilizados como referencia:

| Archivo publicado | SHA-256 |
| --- | --- |
| `/assets/index-BVA3TF8Q.js` | `972293ce8f7cb48eb9b06dce6b568531a124f9a651439fb72f6b11d40f825f2b` |
| `/assets/index-CrI6w5xa.css` | `a677d229f199aac033152857435a32c4b1e6e17fdf2dd265b80ca41d1f0da312` |

Las trece imágenes de producto e ingredientes se copiaron sin modificar sus bytes. Los créditos y enlaces de licencia de las fotografías de ingredientes permanecen visibles. YouTube, Google Fonts y Mercado Libre conservan los enlaces externos del sitio de referencia.

## Validación

- `npm ci` y `npm run build` completados.
- Comparación en Chromium de `/`, `/admin` y `/prueba` a 1440 y 390 píxeles: mismo texto visible, imágenes locales cargadas y ningún error de ejecución de JavaScript.
- Pruebas de carrusel, selección de ingredientes, preguntas frecuentes, enlaces de compra, búsqueda del catálogo, importación CSV y conversación de demostración completadas.
- Capturas del panel idénticas a las del sitio de referencia; las capturas de la portada presentan menos de un 0,1 % de píxeles diferentes.

El panel conserva el desbordamiento horizontal que ya presenta el sitio de referencia a 390 píxeles. La sincronización reproduce la versión publicada; no convierte el panel ni el asistente de demostración en servicios de producción.
