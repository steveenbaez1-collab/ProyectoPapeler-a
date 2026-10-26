# Backlog de producto — Sistema de Control de Inventario para Papelería

Backlog de 11 historias derivadas del alcance del acta. Está ordenado por prioridad (alta, media y baja); dentro de cada grupo se conservan primero las capacidades centrales del inventario. La columna Estado refleja la evidencia disponible en `PRUEBAS.md`, no solo que exista código. Estimación: story points relativos en escala Fibonacci (1, 2, 3, 5, 8); no son horas.

| ID | Historia de usuario | Puntos | Estado | Responsable |
| --- | --- | ---: | --- | --- |
| HU-01 | Como encargado de inventario, quiero registrar productos con código, nombre, cantidad inicial y stock mínimo para mantener organizada la información de la papelería. | 3 | Terminada; CP-01 aprobada | Samuell Steveen Baez Diaz |
| HU-02 | Como encargado de inventario, quiero consultar los productos y sus cantidades disponibles para conocer las existencias. | 2 | En validación; falta un caso de prueba específico de consulta de inventario | Samuell Steveen Baez Diaz |
| HU-03 | Como encargado de inventario, quiero registrar entradas de productos para actualizar las cantidades disponibles. | 3 | Terminada; CP-02 aprobada | Samuell Steveen Baez Diaz |
| HU-04 | Como encargado de inventario, quiero registrar salidas y que el sistema rechace una cantidad mayor al stock para evitar inconsistencias. | 5 | Terminada; CP-03 y CP-04 aprobadas | Samuell Steveen Baez Diaz |
| HU-05 | Como encargado de inventario, quiero consultar el historial de movimientos con fecha y hora para revisar los cambios realizados. | 3 | En validación; CP-08 pendiente | Samuell Steveen Baez Diaz |
| HU-09 | Como encargado de inventario, quiero que los productos y movimientos se conserven al recargar la página para no perder el registro en el navegador que estoy usando. | 3 | En validación; CP-05 pendiente | Samuell Steveen Baez Diaz |
| HU-06 | Como encargado de inventario, quiero buscar productos por código o nombre para encontrarlos rápidamente. | 2 | En validación; CP-06 pendiente | Samuell Steveen Baez Diaz |
| HU-07 | Como encargado de inventario, quiero filtrar los productos disponibles y los que tienen stock bajo para identificar cuáles requieren atención. | 2 | En validación; CP-07 pendiente | Samuell Steveen Baez Diaz |
| HU-08 | Como encargado de inventario, quiero filtrar el historial por entradas o salidas para consultar el tipo de movimiento que necesito. | 2 | En validación; CP-09 pendiente | Samuell Steveen Baez Diaz |
| HU-10 | Como encargado de inventario, quiero exportar el inventario a CSV para revisar sus datos fuera del sistema. | 3 | En validación; CP-10 pendiente | Samuell Steveen Baez Diaz |
| HU-11 | Como encargado de inventario, quiero exportar el historial de movimientos a CSV para revisar sus registros fuera del sistema. | 3 | En validación; CP-11 pendiente | Samuell Steveen Baez Diaz |

### Totales del backlog para el corte

- Puntos comprometidos en el backlog completo del corte: **31**.
- Puntos terminados con pruebas aprobadas: **11**.
- Puntos en curso o pendientes de validación: **20**.

Estos totales describen el estado actual del backlog completo; no son la velocidad de un sprint.

## Planificación propuesta — Sprint 1 (primera clase de semana 12)

Esta es una propuesta para llevar a la sesión y ratificarla con la capacidad real de trabajo individual. El proyecto cuenta con autorización docente para trabajarse individualmente. Por eso, los puntos seleccionados no se presentan como una capacidad ya medida.

**Objetivo propuesto:** Al finalizar el Sprint 1, el encargado podrá consultar las existencias actuales y revisar un historial de movimientos fechado, con ambas funciones verificadas y conformes a los criterios de aceptación.

| ID | Historia seleccionada | Puntos |
| --- | --- | ---: |
| HU-02 | Consultar los productos y sus cantidades disponibles | 2 |
| HU-05 | Consultar el historial de movimientos con fecha y hora | 3 |
| **Total propuesto** |  | **5** |

La selección sigue el orden del backlog entre las historias aún no validadas. Antes de comprometerla en clase, Samuell debe comprobar que los 5 puntos caben en las horas reales que tendrá durante las dos semanas. Si no caben, se reduce y vuelve a acordar el sprint backlog y se ajusta también el objetivo; no se agregan historias por completar una cantidad arbitraria.

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

Al cerrar la planificación en clase, crear o mover las tarjetas **HU-02** y **HU-05** a la columna **Por hacer**, conservando sus puntos. No iniciar una historia hasta que cumpla la Definition of Ready. Aplicar la Definition of Done de `ESTANDARES.md` antes de mover una tarjeta a Terminado.

## Nota sobre el estado real y el incremento

El código ya contiene las funciones seleccionadas; los casos de prueba correspondientes aún no están aprobados. Por tanto, este sprint se plantea como aceptación, corrección de hallazgos y cierre verificable de la Definition of Done, no como si esas funciones fueran nuevas. Si la docente exige que el incremento agregue una capacidad que el usuario todavía no tenga, se debe acordar con ella una historia adicional dentro del alcance antes de cerrar la planificación; no se inventa una necesidad del cliente.

## Alcance

Las historias cubren registro y consulta de productos, entradas y salidas, validación del stock, historial, búsqueda, filtros, almacenamiento local y exportación CSV. No incluyen ventas en línea, facturación electrónica, aplicación móvil ni sincronización entre dispositivos.
