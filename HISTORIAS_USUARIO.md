# Backlog de producto — Sistema de Control de Inventario para Papelería

Estas son las historias de usuario que definí para el sistema, teniendo en cuenta lo que se acordó en el acta del proyecto. Las organicé por prioridad y les asigné puntos para comparar el esfuerzo; los puntos no representan horas. En Estado anoté si la función ya está probada o si todavía me falta revisarla.

| ID | Historia de usuario | Puntos | Estado | Responsable |
| --- | --- | ---: | --- | --- |
| HU-01 | Como encargado de inventario, quiero registrar productos con código, nombre, cantidad inicial y stock mínimo para mantener organizada la información de la papelería. | 3 | Terminada; CP-01 aprobada | Samuell Steveen Baez Diaz |
| HU-02 | Como encargado de inventario, quiero consultar los productos y sus cantidades disponibles para conocer las existencias. | 2 | Terminada; CP-12 y CP-13 aprobadas; DoD verificada 30/10/2026 | Samuell Steveen Baez Diaz |
| HU-03 | Como encargado de inventario, quiero registrar entradas de productos para actualizar las cantidades disponibles. | 3 | Terminada; CP-02 aprobada | Samuell Steveen Baez Diaz |
| HU-04 | Como encargado de inventario, quiero registrar salidas y que el sistema rechace una cantidad mayor al stock para evitar inconsistencias. | 5 | Terminada; CP-03 y CP-04 aprobadas | Samuell Steveen Baez Diaz |
| HU-05 | Como encargado de inventario, quiero consultar el historial de movimientos con fecha y hora para revisar los cambios realizados. | 3 | Terminada; criterios de HU-05 y DoD verificados 30/10/2026 | Samuell Steveen Baez Diaz |
| HU-09 | Como encargado de inventario, quiero que los productos y movimientos se conserven al recargar la página para no perder el registro en el navegador que estoy usando. | 3 | En validación; CP-05 aprobada; DoD pendiente | Samuell Steveen Baez Diaz |
| HU-06 | Como encargado de inventario, quiero buscar productos por código o nombre para encontrarlos rápidamente. | 2 | En validación; CP-06 aprobada; DoD pendiente | Samuell Steveen Baez Diaz |
| HU-07 | Como encargado de inventario, quiero filtrar los productos disponibles y los que tienen stock bajo para identificar cuáles requieren atención. | 2 | En validación; CP-07 aprobada; DoD pendiente | Samuell Steveen Baez Diaz |
| HU-08 | Como encargado de inventario, quiero filtrar el historial por entradas o salidas para consultar el tipo de movimiento que necesito. | 2 | En validación; CP-09 aprobada; DoD pendiente | Samuell Steveen Baez Diaz |
| HU-10 | Como encargado de inventario, quiero exportar el inventario a CSV para revisar sus datos fuera del sistema. | 3 | En validación; CP-10 aprobada el 30/10/2026; falta verificar la DoD | Samuell Steveen Baez Diaz |
| HU-11 | Como encargado de inventario, quiero exportar el historial de movimientos a CSV para revisar sus registros fuera del sistema. | 3 | En validación; CP-11 aprobada el 30/10/2026; falta verificar la DoD | Samuell Steveen Baez Diaz |

### Totales del backlog para el corte

- Puntos comprometidos en el backlog completo del corte: **31**.
- Puntos terminados con pruebas aprobadas: **16**.
- Puntos en curso o pendientes de validación: **15**.

Estos números corresponden a todas las historias del proyecto. No significan que pueda terminar los 31 puntos en un solo sprint.

## Planificación y resultado — Sprint 1 (semana 12)

Como estoy trabajando solo con autorización de la profesora, el sprint se planificó de forma individual. Las historias comprometidas fueron HU-02 y HU-05, por un total de 5 puntos; ambas se cerraron en la sesión de construcción y su evidencia quedó en el repositorio y en el historial del tablero.

**Objetivo del sprint:** Como encargado de inventario, podré consultar las existencias y revisar el historial de movimientos con su fecha y hora.

| ID | Historia seleccionada | Puntos |
| --- | --- | ---: |
| HU-02 | Consultar los productos y sus cantidades disponibles | 2 |
| HU-05 | Consultar el historial de movimientos con fecha y hora | 3 |
| **Total propuesto** |  | **5** |

Seleccioné estas historias para completar la consulta del inventario y la revisión de movimientos que aún necesitaban validación. El resultado registrado fue de 5 puntos terminados de los 5 comprometidos en este sprint; esto no significa que todo el backlog del proyecto esté terminado.

### Criterios de aceptación de las historias seleccionadas

**HU-02 — Consulta de inventario**

1. Al abrir la sección de inventario con al menos un producto registrado, se muestra su código, nombre, cantidad disponible y estado de stock.
2. La cantidad mostrada coincide con la cantidad inicial más las entradas y menos las salidas registradas.
3. Si no hay productos, la tabla muestra un mensaje de inventario vacío y no presenta filas de datos ficticias.

**HU-05 — Historial de movimientos**

1. Al registrar una entrada, aparece una fila con el código, tipo «Entrada», cantidad, resultado y fecha/hora.
2. Al registrar una salida válida, aparece una fila con el código, tipo «Salida», cantidad, resultado y fecha/hora.
3. La fecha/hora se presenta en formato local legible para Colombia y corresponde al momento del registro.

### Registro de las tarjetas en el tablero

Las tarjetas **HU-02** y **HU-05** quedaron asociadas al tablero y se movieron de **Por hacer** a **Terminado** el 30/10/2026. Las horas y la referencia a cada historia están en `BITACORA_SESION_SEMANA12.html`; el cierre y las pruebas se pueden contrastar con los issues #8 y #9 y con `PRUEBAS.md`.

## Nota sobre el estado real y el incremento

Las funciones de HU-02 y HU-05 ya estaban implementadas. En la revalidación del 30/10/2026 consulté el inventario, comprobé la cantidad después de una entrada y una salida, revisé el historial con fecha y hora local, recargué la página y comprobé los filtros. Los resultados y datos usados quedaron registrados en PRUEBAS.md; no aparecieron errores de JavaScript en la consola durante esa revisión. En esa misma fecha también se comprobó el contenido CSV de HU-10 y HU-11 (CP-10 y CP-11 aprobadas); sus historias siguen en validación porque todavía falta revisar todas las condiciones de la Definition of Done.

## Alcance

Las historias cubren registro y consulta de productos, entradas y salidas, validación del stock, historial, búsqueda, filtros, almacenamiento local y exportación CSV. No incluyen ventas en línea, facturación electrónica, aplicación móvil ni sincronización entre dispositivos.
