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
| HU-10 | Como encargado de inventario, quiero exportar el inventario a CSV para revisar sus datos fuera del sistema. | 3 | En validación; CP-10 pendiente | Samuell Steveen Baez Diaz |
| HU-11 | Como encargado de inventario, quiero exportar el historial de movimientos a CSV para revisar sus registros fuera del sistema. | 3 | En validación; CP-11 pendiente | Samuell Steveen Baez Diaz |

### Totales del backlog para el corte

- Puntos comprometidos en el backlog completo del corte: **31**.
- Puntos terminados con pruebas aprobadas: **16**.
- Puntos en curso o pendientes de validación: **15**.

Estos números corresponden a todas las historias del proyecto. No significan que pueda terminar los 31 puntos en un solo sprint.

## Planificación propuesta — Sprint 1 (primera clase de semana 12)

Como estoy trabajando solo con autorización de la profesora, preparé esta propuesta para revisarla en la primera clase de la semana 12. Todavía debo confirmar que el trabajo seleccionado se ajuste al tiempo que tengo.

**Objetivo propuesto:** En este sprint quiero comprobar que se puedan consultar las existencias y revisar el historial de movimientos con su fecha y hora.

| ID | Historia seleccionada | Puntos |
| --- | --- | ---: |
| HU-02 | Consultar los productos y sus cantidades disponibles | 2 |
| HU-05 | Consultar el historial de movimientos con fecha y hora | 3 |
| **Total propuesto** |  | **5** |

Escogí estas dos historias porque todavía tengo pendientes sus pruebas. En clase revisaré si alcanzo a trabajar los 5 puntos durante el sprint. Si el tiempo no me alcanza, ajustaré la selección y el objetivo con lo que se acuerde; no quiero escoger historias solo para completar un número de puntos.

### Criterios de aceptación de las historias seleccionadas

**HU-02 — Consulta de inventario**

1. Al abrir la sección de inventario con al menos un producto registrado, se muestra su código, nombre, cantidad disponible y estado de stock.
2. La cantidad mostrada coincide con la cantidad inicial más las entradas y menos las salidas registradas.
3. Si no hay productos, la tabla muestra un mensaje de inventario vacío y no presenta filas de datos ficticias.

**HU-05 — Historial de movimientos**

1. Al registrar una entrada, aparece una fila con el código, tipo «Entrada», cantidad, resultado y fecha/hora.
2. Al registrar una salida válida, aparece una fila con el código, tipo «Salida», cantidad, resultado y fecha/hora.
3. La fecha/hora se presenta en formato local legible para Colombia y corresponde al momento del registro.

### Tarjetas para el tablero

Cuando confirme la planificación en clase, pondré las tarjetas **HU-02** y **HU-05** en la columna **Por hacer** del tablero y conservaré los puntos asignados. Antes de empezar cada historia revisaré que esté lista según la Definition of Ready. La moveré a **Terminado** cuando cumpla la Definition of Done de `ESTANDARES.md`.

## Nota sobre el estado real y el incremento

Las funciones de HU-02 y HU-05 ya estaban implementadas. En la revalidación del 30/10/2026 consulté el inventario, comprobé la cantidad después de una entrada y una salida, revisé el historial con fecha y hora local, recargué la página y comprobé los filtros. Los resultados y datos usados quedaron registrados en PRUEBAS.md; no aparecieron errores de JavaScript en la consola durante esa revisión. Las exportaciones CSV de HU-10 y HU-11 continúan pendientes y no forman parte del cierre de estas dos historias.

## Alcance

Las historias cubren registro y consulta de productos, entradas y salidas, validación del stock, historial, búsqueda, filtros, almacenamiento local y exportación CSV. No incluyen ventas en línea, facturación electrónica, aplicación móvil ni sincronización entre dispositivos.
