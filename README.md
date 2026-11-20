# Nutrición Pura

Tienda de suplementos Nutre Pure para Chile. El catálogo incluye Berberina Nutre Pure y Magnesium Complex Nutre Pure. El checkout procesa los pagos con Flow mediante las rutas API de Vercel y guarda los pedidos en Supabase; revisa la [guía paso a paso de despliegue](docs/VERCEL_DEPLOY.md), la [guía de pagos](docs/FLOW_PAYMENTS.md) y la [guía de Meta Pixel/CAPI](docs/META_TRACKING.md).

## Rutas

- `/` muestra las fichas, galerías, la comparación de fórmulas y las preguntas frecuentes. Usa `/#berberina` o `/#magnesio` para abrir una ficha específica.
- `/admin` abre el panel comercial de demostración, con catálogo e importación de archivos Excel y CSV.
- `/prueba` recorre un anuncio simulado y el chat Mila, que responde mediante reglas y conserva el historial en la sesión de la pestaña.

## Desarrollo local

Usa Node.js 22.12 o posterior en la rama 22, o Node.js 24.

```bash
npm ci
npm run dev
```

Abre `http://localhost:5173`. Para compilar y revisar la versión de producción en local:

```bash
npm run build
npm run preview
```

`src/main.tsx` selecciona la vista según la ruta. `src/PureStorefront.jsx` y `src/pure-storefront.css` contienen la tienda actual. `src/App.jsx` y `src/styles.css` contienen el panel y el recorrido de demostración. Las imágenes de ambos productos están en `public/products/`.

## Publicación en Vercel

El sitio y las rutas de pago se publican en Vercel; los pedidos se guardan en Supabase. Sigue la [guía de publicación en Vercel](docs/VERCEL_DEPLOY.md) para crear la tabla, configurar las variables y desplegar.

El panel y el chat son demostraciones en el navegador. La [nota de sincronización](docs/SYNC_NEXO.md) describe el origen del panel y del recorrido de demostración.
