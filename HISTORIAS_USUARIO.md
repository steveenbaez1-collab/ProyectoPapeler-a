# Historias de usuario — Sistema de Control de Inventario para Papelería

Este backlog se basa en el alcance y las funciones actuales del proyecto. Los puntos son una estimación inicial relativa de esfuerzo (no representan horas) y deben revisarse según la escala acordada para la actividad.

| ID | Historia de usuario | Prioridad | Puntos |
| --- | --- | --- | ---: |
| HU-01 | Como encargado de inventario, quiero registrar productos con código, nombre, cantidad inicial y stock mínimo para mantener organizada la información de la papelería. | Alta | 3 |
| HU-02 | Como encargado de inventario, quiero consultar los productos y sus cantidades disponibles para conocer las existencias. | Alta | 2 |
| HU-03 | Como encargado de inventario, quiero registrar entradas de productos para actualizar las cantidades disponibles. | Alta | 3 |
| HU-04 | Como encargado de inventario, quiero registrar salidas y que el sistema rechace una cantidad mayor al stock para evitar inconsistencias. | Alta | 5 |
| HU-05 | Como encargado de inventario, quiero consultar el historial de movimientos con fecha y hora para revisar los cambios realizados. | Alta | 3 |
| HU-06 | Como encargado de inventario, quiero buscar productos por código o nombre para encontrarlos rápidamente. | Media | 2 |
| HU-07 | Como encargado de inventario, quiero filtrar los productos disponibles y los que tienen stock bajo para identificar cuáles requieren atención. | Media | 2 |
| HU-08 | Como encargado de inventario, quiero filtrar el historial por entradas o salidas para consultar el tipo de movimiento que necesito. | Media | 2 |
| HU-09 | Como encargado de inventario, quiero que los productos y movimientos se conserven al recargar la página para no perder el registro en el navegador que estoy usando. | Alta | 3 |
| HU-10 | Como encargado de inventario, quiero exportar el inventario a CSV para revisar sus datos fuera del sistema. | Baja | 3 |
| HU-11 | Como encargado de inventario, quiero exportar el historial de movimientos a CSV para revisar sus registros fuera del sistema. | Baja | 3 |

## Criterio de alcance

Las historias describen las funciones incluidas actualmente: productos, inventario, entradas y salidas, validación de stock, historial, búsqueda, filtros, almacenamiento local y exportación CSV. No incluyen ventas en línea, facturación electrónica, aplicación móvil ni sincronización entre dispositivos.

La existencia de una función en el código no significa que su prueba esté aprobada. El estado de las verificaciones se lleva por separado en `PRUEBAS.md`.
