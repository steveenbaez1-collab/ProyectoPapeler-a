

## Revisión de exportaciones CSV (30/10/2026)

Se probaron las dos opciones de exportación en la aplicación con los datos de prueba PEND01. En cada caso, la aplicación mostró su mensaje de confirmación y generó el contenido CSV para descargar.

- **CP-10 — Inventario:** el archivo contiene las columnas Código, Producto, Cantidad disponible, Stock mínimo y Estado. La fila de PEND01 mostró Papel de prueba, 4 unidades, mínimo 1 y estado Disponible.
- **CP-11 — Movimientos:** el archivo contiene las columnas Código, Tipo, Cantidad, Resultado y Fecha y hora. Incluyó la entrada de 1 unidad a las 8:48:41 p. m. y la salida de 1 unidad a las 8:48:47 p. m., ambas registradas el 30/10/2026.

Resultado: ambas exportaciones generaron los encabezados y filas esperados. Se verificó el contenido generado y el mensaje de confirmación de cada opción.
