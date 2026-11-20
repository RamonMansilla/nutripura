# Pagos en Flow

El checkout crea pagos a través de las rutas API desplegadas en Vercel. El servidor valida los productos y calcula los importes desde un catálogo fijo, aplica el 10 % de descuento y guarda los pedidos en Supabase. Las credenciales de Flow y la llave de Supabase permanecen en variables de entorno del servidor.

Flow notifica a `/api/flow/confirmation`; al volver a la tienda, el navegador consulta `/api/flow/status`. En ambos casos el servidor verifica con Flow el estado, el importe, la moneda y el número de pedido antes de confirmar la compra o habilitar los libros de regalo.

El pago cubre solo los productos: el despacho no está incluido y debe coordinarse por separado. El correo ingresado se comparte con Flow para iniciar el pago y se conserva junto al pedido en Supabase.

Para configurar la base de datos, las variables de entorno y el despliegue, sigue la [guía paso a paso de Vercel](VERCEL_DEPLOY.md). La integración de Meta CAPI envía eventos solo cuando existe consentimiento de marketing.
