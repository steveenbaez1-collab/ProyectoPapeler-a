# Pruebas del sistema

Sistema: Control de Inventario para Papelería

Fecha de revisión: 30 de octubre de 2026

## Casos revisados

| Código | Prueba | Datos usados | Resultado esperado | Estado |
| --- | --- | --- | --- | --- |
| CP-01 | Registrar producto | P001, Cuaderno, cantidad 3, stock mínimo 3 | Aparece en la tabla y queda marcado como stock bajo | Aprobado |
| CP-02 | Registrar entrada | P001, entrada de 2 unidades | La cantidad sube de 3 a 5 y el estado cambia a disponible | Aprobado |
| CP-03 | Registrar salida válida | P001, salida de 2 unidades | La cantidad baja de 5 a 3 y el movimiento queda registrado | Aprobado |
| CP-04 | Rechazar salida mayor al stock | P001, salida de 4 cuando hay 3 disponibles | No descuenta unidades y muestra mensaje de error | Aprobado |
| CP-05 | Conservar datos al recargar | PERSIST01, cantidad inicial 5; entrada de 2; recargar | El producto queda con 7 unidades y el movimiento sigue visible | Aprobado el 30/10/2026 |
| CP-06 | Buscar producto | PEND01 y Papel de prueba; buscar código/nombre y consultar NOEXISTE | Muestra coincidencias y NOEXISTE informa que no hay resultados | Aprobado el 30/10/2026 |
| CP-07 | Filtrar por estado | PEND01 (4 disponibles, mínimo 1) y PLOW01 (1, mínimo 1) | “Disponibles” muestra PEND01 y “Stock bajo” muestra PLOW01 | Aprobado el 30/10/2026 |
| CP-08 | Consultar fecha del movimiento | Registrar entrada y salida para TST001 | Ambas filas muestran tipo, cantidad, resultado y fecha/hora local | Aprobado |
| CP-09 | Filtrar historial | PERSIST01; entrada de 2 y salida de 1 | “Solo entradas” y “Solo salidas” muestran el movimiento correspondiente | Aprobado el 30/10/2026 |
| CP-10 | Exportar inventario | PEND01; pulsar Exportar inventario a CSV | CSV con código, nombre, cantidades y estado | Aprobado el 30/10/2026 |
| CP-11 | Exportar movimientos | Movimientos PEND01; pulsar Exportar movimientos a CSV | CSV con código, tipo, cantidad, resultado y fecha/hora | Aprobado el 30/10/2026 |
| CP-12 | Consultar existencias después de movimientos | TST001 con 10; entrada de 2 y salida de 1 | Inventario muestra 11 unidades disponibles | Aprobado |

## Detalle de revisión del 30 de octubre

Se probó la aplicación con TST001 y sin datos precargados. La consulta mostró código, nombre, cantidad, stock mínimo y estado. Después de registrar una entrada de 2 y una salida de 1, mostró 11 unidades (10 + 2 - 1).

El historial mostró la entrada de 2 como Registrada el 30/10/2026 a las 8:15:57 p. m. y la salida de 1 a las 8:16:08 p. m. En esa revisión no se probaron recarga, filtros ni exportación CSV.

## Observaciones

La regla de rechazo de salidas mayores al stock está respaldada por CP-04. El sistema identifica stock bajo cuando la cantidad es menor o igual al mínimo. Los datos se guardan en el almacenamiento local del navegador y no se sincronizan entre dispositivos.

CP-05 fue aprobada el 30/10/2026 al recargar la página y comprobar que el producto y movimiento persistieron.

### CP-13 — Inventario sin productos (30/10/2026)

Al abrir la aplicación sin productos registrados, la tabla mostró No hay productos registrados y no presentó filas. Resultado: aprobado.

## Revalidación de HU-02 y HU-05 — 30/10/2026

Se trabajó con PEND01 (Papel de prueba), con 4 unidades y mínimo de 1. Registré una entrada de 1 a las 8:48:41 p. m. y una salida de 1 a las 8:48:47 p. m.; ambas quedaron como Registrada con fecha y hora local. El inventario volvió a mostrar 4 unidades (4 + 1 - 1), mínimo 1 y estado Disponible.

Solo entradas mostró únicamente la entrada y Solo salidas únicamente la salida. Al recargar, producto y movimientos siguieron visibles. Durante la recarga y consulta no aparecieron errores de JavaScript.

Resultado: consulta de existencias e historial revalidados. PEND01 y sus movimientos son datos de prueba locales.

## Revisión de exportaciones CSV — 30/10/2026

Probé ambas opciones con PEND01. La aplicación mostró un mensaje de confirmación y generó el contenido CSV.

- CP-10 — Inventario: encabezados Código, Producto, Cantidad disponible, Stock mínimo y Estado. La fila mostró PEND01, Papel de prueba, 4 unidades, mínimo 1 y Disponible.
- CP-11 — Movimientos: encabezados Código, Tipo, Cantidad, Resultado y Fecha y hora. Incluyó la entrada de 1 a las 8:48:41 p. m. y la salida de 1 a las 8:48:47 p. m., ambas del 30/10/2026.

Comprobé el contenido generado y el mensaje de confirmación de ambas exportaciones. PEND01 son datos de prueba locales.
