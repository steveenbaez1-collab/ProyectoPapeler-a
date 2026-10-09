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
- Registro de movimientos de entrada y salida.
- Historial de movimientos con fecha y hora de registro.
- Validación para impedir salidas mayores al stock disponible.
- Identificación de productos con stock bajo.
- Conservación de productos y movimientos al recargar la página, usando el almacenamiento local del navegador.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en el navegador.
3. Registrar productos y probar entradas o salidas desde la interfaz.

## Regla de negocio principal

No se puede registrar una salida de producto si la cantidad solicitada es mayor que la cantidad disponible en inventario.

## Estado del proyecto

El sistema permite registrar productos, consultar inventario y manejar movimientos básicos. Los datos se conservan en el almacenamiento local del navegador utilizado; no se sincronizan entre dispositivos ni navegadores distintos.
