# Meta Pixel y Conversions API

La tienda usa el Pixel `1089358126319120`. No descarga el script de Meta ni envía eventos hasta que la persona acepta las cookies de marketing. La elección se guarda en el navegador y puede cambiarse desde **Preferencias de cookies de marketing** en el pie de página.

Con consentimiento, el navegador registra `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout` y `Purchase`. Las rutas de pago en Vercel envían `InitiateCheckout` y `Purchase` por Conversions API (CAPI); el evento `Purchase` se envía solo después de verificar en Flow que el pago fue aprobado. Pixel y CAPI comparten `event_id` para deduplicar `InitiateCheckout` y `Purchase`. Las solicitudes de CAPI incluyen correo normalizado y hasheado, navegador y, cuando existen, las cookies publicitarias (`_fbp`/`_fbc`) para coincidencia. No se envía la dirección IP.

Estos eventos permiten crear una audiencia de personas que iniciaron el pago pero no compraron. No envían mensajes ni recuperan pedidos por correo automáticamente: la audiencia y las campañas de remarketing se configuran aparte en Meta Ads. Sin consentimiento de marketing no se carga el Pixel ni se envían eventos CAPI.

## Activar CAPI

1. En Meta Events Manager, abre el origen de datos del Pixel indicado arriba y genera un token de acceso para Conversions API.
2. Guarda el token como variable `META_CAPI_ACCESS_TOKEN` en **Vercel → Project Settings → Environment Variables** para Production. No lo pongas en el código ni en el chat.
3. Vuelve a desplegar en Vercel para aplicar la variable.
4. En Events Manager, verifica la recepción de los eventos y que `InitiateCheckout`/`Purchase` aparecen deduplicados. En Ads Manager puedes crear una audiencia de sitio web basada en `InitiateCheckout` y excluir `Purchase`.

El endpoint usa Graph API `v27.0`. Antes de publicar, actualiza el aviso/política de privacidad para describir cookies de marketing, medición, CAPI, los datos compartidos con Meta y cómo retirar el consentimiento. Revisa también que las campañas y los textos cumplan las políticas de Meta aplicables a suplementos.
