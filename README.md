# Sistema de Control de Inventario para Papelería

Proyecto web sencillo para controlar productos, cantidades disponibles, entradas y salidas de una papelería.

## Tecnologías usadas

- HTML
- CSS
- JavaScript

## Funcionalidades actuales

- Registro de productos con código, nombre, cantidad inicial y stock mínimo.
- Consulta del inventario disponible.
- Búsqueda de productos por código o nombre en las tablas de productos e inventario.
- Filtro del inventario por productos disponibles o con stock bajo.
- Exportación del inventario a un archivo CSV.
- Exportación del historial de movimientos a un archivo CSV.
- Registro de movimientos de entrada y salida.
- Historial de movimientos con fecha y hora de registro.
- Filtro del historial para consultar entradas o salidas por separado.
- Validación para impedir salidas mayores al stock disponible.
- Identificación de productos con stock bajo.
- Conservación de productos y movimientos al recargar la página, usando el almacenamiento local del navegador.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en el navegador.
3. Registrar productos y probar entradas o salidas desde la interfaz.

## Documentación del proyecto

- [Historias de usuario y planificación del sprint](./HISTORIAS_USUARIO.md)
- [Estándares de trabajo](./ESTANDARES.md)
- [Casos y resultados de pruebas](./PRUEBAS.md)
- [Instrumento de satisfacción listo para aplicar](./INSTRUMENTO_SATISFACCION.md) — todavía no tiene respuestas recopiladas.
- [Encuesta en línea](./encuesta.html): envía cada respuesta por WhatsApp. Configuración en [APLICAR_ENCUESTA.md](./docs/entrega-final/APLICAR_ENCUESTA.md).
- [Entrega final (borrador con las 13 secciones)](./docs/entrega-final/ENTREGA_FINAL.md)
- [Plan de calidad y registro de defectos](./docs/entrega-final/PLAN_CALIDAD.md)
- [Propuesta del sprint 2](./docs/entrega-final/SPRINT_2.md)
- [Plantillas de retrospectiva](./docs/entrega-final/RETROSPECTIVAS.md)
- [Borrador de preguntas sesgadas para la exposición de Samuel](./BORRADOR_INSTRUMENTO_SATISFACCION.md)

## Análisis estático

La aplicación no necesita Node.js. Para revisar el código con ESLint y html-validate:

```bash
npm install
npm run analisis
```

## Regla de negocio principal

No se puede registrar una salida de producto si la cantidad solicitada es mayor que la cantidad disponible en inventario.

## Estado del proyecto

El sistema permite registrar productos, consultar inventario y manejar movimientos básicos. Los datos se conservan en el almacenamiento local del navegador utilizado; no se sincronizan entre dispositivos ni navegadores distintos.
