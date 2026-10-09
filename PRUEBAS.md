# Pruebas del sistema

Sistema: Control de Inventario para Papelería

Fecha de revisión: 3 de octubre de 2026

## Casos revisados

| Código | Prueba | Datos usados | Resultado esperado | Estado |
| --- | --- | --- | --- | --- |
| CP-01 | Registrar producto | P001, Cuaderno, cantidad 3, stock mínimo 3 | El producto aparece en la tabla y queda marcado como stock bajo | Aprobado |
| CP-02 | Registrar entrada | Producto P001, entrada de 2 unidades | La cantidad sube de 3 a 5 y el estado cambia a disponible | Aprobado |
| CP-03 | Registrar salida válida | Producto P001, salida de 2 unidades | La cantidad baja de 5 a 3 y el movimiento queda registrado | Aprobado |
| CP-04 | Rechazar salida mayor al stock | Producto P001, salida de 4 unidades cuando hay 3 disponibles | El sistema no descuenta unidades y muestra mensaje de error | Aprobado |
| CP-05 | Conservar datos al recargar | Registrar un producto y un movimiento; recargar la página | El producto, las cantidades y el movimiento continúan visibles | Pendiente de ejecución |
| CP-06 | Buscar producto | Escribir parte del código o nombre en cada buscador | Solo aparecen las coincidencias y la tabla informa cuando no hay resultados | Pendiente de ejecución |
| CP-07 | Filtrar por estado | Elegir “Stock bajo” o “Disponibles” en el inventario | La tabla muestra únicamente productos del estado seleccionado | Pendiente de ejecución |
| CP-08 | Consultar fecha del movimiento | Registrar una entrada o salida | El historial muestra fecha y hora del movimiento | Pendiente de ejecución |
| CP-09 | Filtrar historial | Seleccionar “Solo entradas” o “Solo salidas” | El historial muestra únicamente el tipo elegido | Pendiente de ejecución |

## Observaciones

- La validación principal del proyecto se cumple: una salida no puede superar el stock disponible.
- El stock bajo se identifica cuando la cantidad disponible es menor o igual al stock mínimo registrado.
- Los datos se guardan en el almacenamiento local del navegador, pero no se sincronizan con otros dispositivos.
- CP-05 debe ejecutarse en el navegador antes de marcarse como aprobado. Los datos se guardan solo en el navegador actual.
