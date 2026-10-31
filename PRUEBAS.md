# Pruebas del sistema

Sistema: Control de Inventario para Papelería

Fecha de revisión: 30 de octubre de 2026

## Casos revisados

| Código | Prueba | Datos usados | Resultado esperado | Estado |
| --- | --- | --- | --- | --- |
| CP-01 | Registrar producto | P001, Cuaderno, cantidad 3, stock mínimo 3 | El producto aparece en la tabla y queda marcado como stock bajo | Aprobado |
| CP-02 | Registrar entrada | Producto P001, entrada de 2 unidades | La cantidad sube de 3 a 5 y el estado cambia a disponible | Aprobado |
| CP-03 | Registrar salida válida | Producto P001, salida de 2 unidades | La cantidad baja de 5 a 3 y el movimiento queda registrado | Aprobado |
| CP-04 | Rechazar salida mayor al stock | Producto P001, salida de 4 unidades cuando hay 3 disponibles | El sistema no descuenta unidades y muestra mensaje de error | Aprobado |
| CP-05 | Conservar datos al recargar | PERSIST01, cantidad inicial 5; registrar entrada de 2; recargar la página | El producto queda con 7 unidades y el movimiento sigue visible | Aprobado el 30/10/2026 |
| CP-06 | Buscar producto | Escribir parte del código o nombre en cada buscador | Solo aparecen las coincidencias y la tabla informa cuando no hay resultados | Pendiente de ejecución |
| CP-07 | Filtrar por estado | Elegir “Stock bajo” o “Disponibles” en el inventario | La tabla muestra únicamente productos del estado seleccionado | Pendiente de ejecución |
| CP-08 | Consultar fecha del movimiento | Registrar una entrada y una salida para TST001 | Ambas filas aparecen con tipo, cantidad, resultado y fecha/hora local | Aprobado |
| CP-09 | Filtrar historial | Seleccionar “Solo entradas” o “Solo salidas” | El historial muestra únicamente el tipo elegido | Pendiente de ejecución |
| CP-10 | Exportar inventario | Registrar productos y pulsar “Exportar inventario a CSV” | Se descarga un CSV con código, nombre, cantidades y estado | Pendiente de ejecución |
| CP-11 | Exportar movimientos | Registrar una entrada o salida y pulsar “Exportar movimientos a CSV” | Se descarga un CSV con código, tipo, cantidad, resultado y fecha | Pendiente de ejecución |
| CP-12 | Consultar existencias después de movimientos | TST001 con cantidad inicial 10; registrar entrada de 2 y salida de 1 | El inventario muestra 11 unidades disponibles y el producto en la tabla | Aprobado |

## Detalle de la revisión del 30 de octubre

Se probó la aplicación en el navegador con el producto de prueba TST001, sin datos precargados. La consulta de inventario mostró el código, nombre, cantidad disponible, stock mínimo y estado del producto. Luego de registrar una entrada de 2 unidades y una salida de 1, la consulta mostró 11 unidades, que corresponde a 10 + 2 - 1.

El historial mostró la entrada de 2 unidades como “Registrada” el 30/10/2026 a las 8:15:57 p. m. y la salida de 1 unidad como “Registrada” el 30/10/2026 a las 8:16:08 p. m. No se probaron en esta revisión la recarga de la página, los filtros ni la exportación CSV.

## Observaciones

La regla de rechazo de salidas que superan el stock está respaldada por CP-04, aprobada en la revisión anterior.

El sistema identifica stock bajo cuando la cantidad disponible es menor o igual al stock mínimo registrado.

Los datos se guardan en el almacenamiento local del navegador y no se sincronizan entre dispositivos.

CP-05 fue aprobada el 30/10/2026 al recargar la página y comprobar que el producto y el movimiento persistieron.


### CP-13 — Inventario sin productos (30/10/2026)

Al abrir la aplicación sin productos registrados, la tabla mostró “No hay productos registrados.” y no presentó filas de productos. Resultado: aprobado.
