# Entrega final: Sistema de Control de Inventario para Papelería

> **Borrador preparado con un asistente de IA el 20/11/2026.** Cada dato sale del repositorio, de GitHub, del acta de constitución o de la hoja de respuestas de la encuesta, y se indica de dónde viene. Lo marcado **[PROPUESTA]** lo redactó el asistente a partir de esas evidencias, a pedido del autor: confírmelo o corríjalo. Lo marcado **[COMPLETAR]** depende de algo que todavía no ha ocurrido (el sprint 2, la respuesta del propietario) o que solo conoce el autor (horas reales). Antes de entregar, revise todo y borre este recuadro.

---

## 1. Portada e identificación

- **Espacio académico:** Gerencia de Software (ISS6C) · **Universidad:** Universidad Santo Tomás, Villavicencio · **Fecha:** noviembre de 2026
- **Integrante:** Samuell Steveen Baez Diaz. Proyecto individual con autorización de la docente (`ESTANDARES.md`, sección 1).

| Integrante | Sprint 1 | Sprint 2 |
| --- | --- | --- |
| Samuell Steveen Baez Diaz | Product Owner, Scrum Master y desarrollo | Product Owner, Scrum Master y desarrollo |

**Rotación de roles:** no aplica, porque el equipo es de una persona. La revisión de cada cambio se hace con la política de auto-revisión de `ESTANDARES.md`, sección 6.

**Enlaces:** repositorio https://github.com/steveenbaez1-collab/ProyectoPapeler-a · sistema publicado https://steveenbaez1-collab.github.io/ProyectoPapeler-a/ (activo cuando se habilite GitHub Pages) · tablero [COMPLETAR] · formulario de satisfacción [COMPLETAR: enlace corto del registro de ejecución del script]. Verifíquelos en una ventana de incógnito el día antes de radicar.

## 2. Resumen ejecutivo

Construí un sistema web para controlar el inventario de una papelería pequeña. Antes, el inventario se llevaba a mano, con pérdidas, errores en las cantidades y sin saber a tiempo qué reponer. El propósito es que las papelerías pequeñas ahorren tiempo en la organización de su inventario. Los usuarios son el propietario, que consulta las existencias, y los empleados que registran las entradas y las salidas.

El sistema, hecho en HTML, CSS y JavaScript sin instalación, permite:

- registrar productos con su stock mínimo;
- registrar entradas y salidas;
- consultar las existencias con su estado;
- buscar y filtrar productos y movimientos;
- revisar el historial con fecha y hora;
- conservar los datos al recargar;
- exportar el inventario y el historial a CSV, una función que pidió el propietario para tener la lista en Excel cada día.

La regla de negocio se cumple: una salida mayor que las existencias se rechaza y no descuenta nada.

Trabajé con Scrum adaptado a un integrante, con un backlog de 11 historias y 31 puntos. Al 20/11/2026 hay 16 puntos terminados con pruebas aprobadas. Los 15 restantes tienen sus pruebas aprobadas o parciales, pero falta cerrar su Definition of Done. Seis de las historias no estaban en el acta y se registraron como cambios CC-01 a CC-03.

En calidad, el análisis estático pasó de 18 errores de HTML y 1 de JavaScript a 0, y ninguna función supera una complejidad ciclomática de 10. Once de los trece casos de prueba están aprobados; los otros dos esperan la prueba manual de la descarga del CSV.

La encuesta de satisfacción se aplicó el 20/11/2026 a 4 empleados. El CSAT es de **67 %** (2 de 3 respuestas válidas). Quedaron dos brechas principales: una persona insatisfecha sin causa conocida, y el propietario, que todavía no ha respondido.

[COMPLETAR al cierre del sprint 2: puntos terminados finales y medición de cierre de la calidad.]

## 3. Acta de constitución final y control de cambios

El acta radicada es `ActaDeConstitucion_SamuellBaez.pdf` (actividad del 14 al 21 de septiembre de 2026). Datos principales:

- **Objetivos:** (1) registrar al menos 20 productos; (2) implementar entrada y salida; (3) consultar el inventario; (4) validar el 100 % de las salidas para impedir cantidades superiores al stock.
- **Alcance:** cuatro bloques funcionales: gestión de productos, consulta de inventario, gestión de movimientos y validación de salidas.
- **Exclusiones:** ventas en línea, facturación electrónica, aplicación móvil y contabilidad o gestión financiera avanzada.
- **Interesados:** propietario (cliente, interlocutor principal), empleados (usuarios), Samuell (desarrollador) y la docente (evaluadora).

**Estado de los objetivos del acta:**

| Objetivo | Estado | Evidencia |
| --- | --- | --- |
| 1. Registrar al menos 20 productos | [COMPLETAR: no hay evidencia en el repositorio de 20 productos registrados; las pruebas usan entre 1 y 3 productos de prueba] | — |
| 2. Entradas y salidas | Cumplido | CP-02, CP-03 |
| 3. Consultar el inventario | Cumplido | CP-12, CP-13, issue #8 |
| 4. Validar el 100 % de las salidas | Cumplido | CP-04; en la encuesta, 3 de 3 personas que lo probaron vieron el rechazo |

**Control de cambios frente al acta.** Los cambios que siguen se observan al comparar el acta con el backlog y el repositorio. La fecha es la del commit en que aparecen; el motivo y quién lo decidió solo los conoce usted.

| N.º | Qué cambió | Fecha | Por qué | Quién lo decidió |
| --- | --- | --- | --- | --- |
| CC-01 | Se agregaron la búsqueda de productos (HU-06) y los filtros por estado de stock (HU-07) y por tipo de movimiento (HU-08), que no estaban en los cuatro bloques del acta | 08/10/2026 (commits `cbcee4b`, `77362ee`, `dc2627d`) | Idea propia del autor, para avanzar en el proyecto y mejorar el sistema | Samuell Steveen Baez Diaz |
| CC-02 | Se agregó la conservación de datos al recargar (HU-09) | 08/10/2026 (commit `f0be885`) | Idea propia del autor, para avanzar en el proyecto y mejorar el sistema | Samuell Steveen Baez Diaz |
| CC-03 | Se agregó la exportación a CSV del inventario y del historial (HU-10 y HU-11) | 08/10/2026 (commits `70dbb6b`, `41bface`) | Lo pidió el propietario de la papelería: quería tener cada día en Excel la lista del inventario | Propietario (solicitud); Samuell Steveen Baez Diaz (lo incorporó) |
| CC-04 | Se agregó la exclusión «sincronización entre dispositivos», consecuencia de guardar los datos en el navegador | 23/10/2026 (`HISTORIAS_USUARIO.md`) | Los datos quedan solo en el navegador donde se registran | Samuell Steveen Baez Diaz |
| CC-05 | El acta proponía terminar el 6 a 9 de octubre; el proyecto siguió con backlog, sprints y entrega final | 23/10/2026 | Idea propia del autor, para avanzar en el proyecto y mejorar el sistema | Samuell Steveen Baez Diaz |
| CC-06 | Se adoptó el plan de calidad con cinco atributos (ACQ-01 a ACQ-05) | 20/11/2026 | Medir la calidad con umbrales verificables | Samuell Steveen Baez Diaz |

El acta indica en su matriz de riesgos «Registrar cambios y revisar su impacto antes de incorporarlos», pero CC-01 a CC-05 no se registraron cuando ocurrieron. Ver la sección 7.

## 4. Modelo de proceso adoptado

**Modelo:** Scrum, adaptado a un equipo de una persona con autorización de la docente. El autor tiene los roles de Product Owner, Scrum Master y desarrollo.

**Cómo se aplicó, según las evidencias:**

- **Product backlog:** 11 historias de usuario estimadas en 31 story points (`HISTORIAS_USUARIO.md`, 23/10/2026).
- **Sprints con objetivo:** el sprint 1 comprometió HU-02 y HU-05 (5 puntos) y cerró el 30/10/2026.
- **Definition of Ready y Definition of Done:** `ESTANDARES.md`, secciones 4 y 5.
- **Tablero:** tarjetas por historia en GitHub (issues #8 y #9).
- **Retrospectivas:** `RETROSPECTIVAS.md`.

**Por qué Scrum y no otro modelo:** [COMPLETAR: por qué lo eligió frente a cascada u otro modelo. Un hecho que lo apoya: entre el acta y el backlog se agregaron 6 historias que no estaban previstas (CC-01 a CC-03). Con cascada, los requisitos habrían quedado congelados en el acta.]

**Cambios al modelo durante el semestre:** el acta (septiembre) planeaba el trabajo por entregables con fecha, hasta el 9 de octubre. Desde el 23 de octubre el trabajo se organizó con backlog y sprints (CC-05).

## 5. Gestión del alcance

Backlog completo en `HISTORIAS_USUARIO.md`: **11 historias y 31 puntos**.

| ID | Historia | Pts | Estado al 20/11/2026 |
| --- | --- | ---: | --- |
| HU-01 | Registrar productos | 3 | Terminada (CP-01) |
| HU-02 | Consultar existencias | 2 | Terminada, sprint 1 (CP-12, CP-13, issue #8) |
| HU-03 | Registrar entradas | 3 | Terminada (CP-02) |
| HU-04 | Registrar salidas con validación del stock | 5 | Terminada (CP-03, CP-04) |
| HU-05 | Historial con fecha y hora | 3 | Terminada, sprint 1 (CP-08, issue #9) |
| HU-06 | Buscar productos | 2 | En validación, falta la DoD (CP-06) |
| HU-07 | Filtrar por estado de stock | 2 | En validación, falta la DoD (CP-07) |
| HU-08 | Filtrar el historial por tipo | 2 | En validación, falta la DoD (CP-09) |
| HU-09 | Conservar los datos al recargar | 3 | En validación, falta la DoD (CP-05) |
| HU-10 | Exportar el inventario a CSV | 3 | En validación, falta la descarga manual (CP-10) |
| HU-11 | Exportar el historial a CSV | 3 | En validación, falta la descarga manual (CP-11) |

**Terminados:** 16 de 31 puntos. **Fuera del alcance:** ventas en línea, facturación electrónica, aplicación móvil y sincronización entre dispositivos. **Historias nuevas que salgan de la encuesta:** la brecha 3 de la sección 10 es una petición abierta; [COMPLETAR: decida si se registra como historia candidata]. **Story map:** [COMPLETAR o anexar].

## 6. Gestión del tiempo

| Hito del acta | Fecha propuesta en el acta | Fecha real | Observación |
| --- | --- | --- | --- |
| 1. Acta de constitución | 14–21 sep. 2026 | Septiembre de 2026 (PDF en Drive) | Sin retraso |
| 2. Diseño del sistema | 22–25 sep. 2026 | [COMPLETAR] | No hay evidencia de diseño en el repositorio |
| 3. Módulo de productos | 26–30 sep. 2026 | 03/10/2026 (commit `bb9db7f`) | Unos 3 días después de lo propuesto |
| 4. Módulo de movimientos | 1–5 oct. 2026 | 03/10/2026 (commit `bb9db7f`) | Dentro de lo propuesto |
| 5. Pruebas y entrega final | 6–9 oct. 2026 | Pruebas documentadas el 30/10 y el 12/11/2026; entrega final [COMPLETAR] | El proyecto se extendió con backlog y sprints (CC-05) |

Otros hitos que no estaban en el acta: estándares del proyecto (02/10/2026, `e3db591`), backlog de 11 historias (23/10/2026, `86748f5`), cierre del sprint 1 (30/10/2026, issues #8 y #9) y encuesta de satisfacción (20/11/2026, 4 respuestas).

| Sprint | Comprometido | Terminado | Velocidad |
| --- | ---: | ---: | ---: |
| Sprint 1 | 5 | 5 | 5 |
| Sprint 2 | [COMPLETAR] | [COMPLETAR] | [COMPLETAR] |

**Interpretación (verifíquela):** las funciones de todas las historias se programaron entre el 3 y el 8 de octubre, antes de que existiera el backlog. Por eso el sprint 1 midió validación y documentación, no construcción. Compárelo con el sprint 2 teniendo esto presente.

**Horas estimadas frente a horas reales:** el acta estimó entre 51 y 80 horas-persona en total, repartidas en siete bloques. Horas reales: [COMPLETAR]. El acta tampoco registró la disponibilidad semanal.

## 7. Gestión de riesgos

Riesgos de la matriz del acta (sección 9). La columna «¿Ocurrió?» se llena con lo que muestran las evidencias; confírmela.

| ID | Riesgo del acta | Prob. / Impacto | ¿Ocurrió? | Qué se hizo |
| --- | --- | --- | --- | --- |
| R1 | Información insuficiente de productos | Media / Medio | Sí, en parte: las pruebas usan productos de prueba (P001, PEND01, TST001), no datos reales de la papelería | [COMPLETAR] |
| R2 | Errores en cantidades | Media / Alto | No se observaron: las cantidades cuadraron en CP-02, CP-03 y CP-12 | Validación de cantidades enteras y positivas antes de guardar (commit `d4498a9`) |
| R3 | Salida superior al stock | Media / Alto | Controlado | Bloqueo automático verificado en CP-04 y confirmado por 3 de 3 personas en la encuesta |
| R4 | Retraso del desarrollo | Media / Medio | [COMPLETAR] | [COMPLETAR] |
| R5 | Errores durante pruebas | Media / Medio | Sí: CP-10 y CP-11 quedaron parciales y con estados distintos entre issues y `PRUEBAS.md` (DEF-04) | Pendiente en el sprint 2 |
| R6 | Cambios de requisitos | Baja / Alto | Sí: se agregaron 6 historias fuera del acta (CC-01 a CC-03) | No se registraron cuando ocurrieron; se reconstruyeron el 20/11/2026 en esta sección |

**Riesgo no anticipado (propuesta, verifíquela):** las evidencias quedaron inconsistentes, con issues en «Aprobado» y `PRUEBAS.md` en «Parcial», y con una bitácora citada que no se subió. Se detectó el 20/11/2026 (DEF-04 y DEF-05).

## 8. Aseguramiento de calidad

Atributos, umbrales, mediciones y defectos en [`PLAN_CALIDAD.md`](./PLAN_CALIDAD.md). Resumen:

| ID | Umbral | Medición 1 (20/11) | Medición 2 (20/11) | Cierre |
| --- | --- | --- | --- | --- |
| ACQ-01 | 100 % de 13 casos | 11 aprobados y 2 parciales | Sin cambio | [COMPLETAR] |
| ACQ-02 | 0 salidas indebidas aceptadas | 0 (CP-04) | — | [COMPLETAR] |
| ACQ-03 | < 1 s con 500 productos | Sin medir | Sin medir | [COMPLETAR] |
| ACQ-04 | Complejidad ≤ 10 | 9 | 9 | [COMPLETAR] |
| ACQ-05 | 0 errores de HTML | 18 | 0 | [COMPLETAR] |

**Pruebas:** 13 casos en `PRUEBAS.md`, cada uno con datos, resultado esperado y resultado observado. **Análisis estático:** ESLint y html-validate, configurados en el repositorio (`npm run analisis`).

## 9. Ejecución ágil

**Sprint 1:** objetivo y criterios de aceptación en `HISTORIAS_USUARIO.md`. Comprometidos HU-02 y HU-05 (5 puntos); terminados 5.

| Métrica | Sprint 1 | Sprint 2 | Qué muestra la diferencia |
| --- | --- | --- | --- |
| Puntos terminados | 5 | [COMPLETAR] | |
| Lead time promedio | [COMPLETAR desde el historial del tablero] | | |
| Cycle time promedio | [COMPLETAR] | | |
| Throughput | [COMPLETAR] | | |

**Burndown:** [COMPLETAR o anexar]. **Sprint 2:** propuesta en [`SPRINT_2.md`](./SPRINT_2.md). **Retrospectivas y acciones de mejora:** [`RETROSPECTIVAS.md`](./RETROSPECTIVAS.md). Cada acción debe quedar con el dato que pruebe que se aplicó.

## 10. Satisfacción del cliente

**Instrumento:** `INSTRUMENTO_SATISFACCION.md` (4 preguntas y perfil de uso). Pasos para aplicarlo en [`APLICAR_ENCUESTA.md`](./APLICAR_ENCUESTA.md). La versión con sesgos que se corrigió está en `BORRADOR_INSTRUMENTO_SATISFACCION.md`.

- **Aplicado el:** 20/11/2026, entre las 11:37 y las 11:42, con Google Forms (hoja «Respuestas: encuesta de satisfacción del inventario» en Drive).
- **Respondieron:** 4 personas, todas con el perfil «Empleado(a) que registra o consulta inventario». El propietario, que es el interlocutor principal según el acta, no respondió.

| Pregunta | Respuestas |
| --- | --- |
| 1. Facilidad para encontrar la cantidad disponible | Muy fácil 1 · Fácil 2 · Ni fácil ni difícil 1 |
| 2. Claridad después de registrar una entrada | Muy claro 1 · Claro 2 · Medianamente claro 1 |
| 3. Salida mayor que las existencias | El sistema la rechazó y mostró un mensaje 3 · No lo probé 1 · La aceptó 0 |
| 4. Satisfacción general | Satisfecho(a) 2 · Insatisfecho(a) 1 · No lo probé 1 |
| Comentario | 1 comentario: «Agregar nuevas funciones a la medida que lleguen más productos» |

**CSAT** = respuestas «Satisfecho(a)» o «Muy satisfecho(a)» en la pregunta 4 ÷ respuestas válidas a la pregunta 4 = **2 ÷ 3 = 67 %**. La respuesta «No lo probé» se excluye del cálculo, como indica el instrumento. Con solo 3 respuestas válidas, una respuesta cambia el resultado en 33 puntos.

La pregunta 3 no tiene ninguna respuesta «La aceptó», así que la regla de negocio no requiere repetir CP-04.

| Brecha | Qué muestra la encuesta | Qué se hizo |
| --- | --- | --- |
| 1 | Una persona quedó insatisfecha, no dejó comentario y no probó la salida mayor al stock. No se sabe la causa | Propuesta: preguntarle directamente qué le faltó al sistema y anotar la respuesta. La encuesta es anónima, así que la pregunta se hace a los cuatro empleados. [COMPLETAR con lo que respondan] |
| 2 | El propietario, interlocutor principal según el acta, no respondió. Las 4 respuestas son de empleados | Aplicar la encuesta al propietario, que puede responder el mismo formulario. Pendiente: [COMPLETAR con la fecha y su respuesta] |
| 3 | Un comentario pide «agregar nuevas funciones a la medida que lleguen más productos». Es una petición abierta, sin una función concreta | Propuesta: registrarla como historia candidata para una segunda versión, sin comprometerla, porque no nombra una función concreta. [CONFIRMAR] |
| 4 | Dos de las cuatro personas marcaron «No lo probé» en alguna pregunta: la invitación no garantizó que probaran todos los flujos | Propuesta: en la siguiente aplicación (al propietario), incluir en el mensaje los pasos de prueba: registrar un producto, una entrada, una salida y una salida mayor al stock. [CONFIRMAR] |

**Evidencia:** exporte la hoja de respuestas a CSV y guarde una captura del resumen de Google Forms para el anexo E.

## 11. Lecciones aprendidas

> **[PROPUESTA]** redactada por el asistente a partir de las evidencias, a pedido del autor. Confírmela, corríjala y explíquela con sus palabras.

**Tres decisiones acertadas:**

1. **Incorporar la exportación a CSV que pidió el propietario.** Es el único cambio que vino del cliente y responde a una necesidad concreta: tener la lista del inventario en Excel cada día. Evidencia: CC-03, HU-10 y HU-11.
2. **Bloquear desde el código la salida mayor al stock.** Era el riesgo de impacto alto del acta. Lo confirman CP-04 y la encuesta: 3 de 3 personas vieron el rechazo y nadie respondió «La aceptó».
3. **Corregir el instrumento de satisfacción antes de aplicarlo.** El borrador tenía preguntas dobles y escalas sin definir. La versión aplicada separa los temas e incluye «No lo probé», lo que permitió excluir del CSAT a quien no evaluó. Evidencia: `BORRADOR_INSTRUMENTO_SATISFACCION.md` frente a `INSTRUMENTO_SATISFACCION.md`.

**Tres errores, cada uno con su consecuencia:**

1. **Programar las funciones antes de tener el backlog.** Todo se hizo entre el 3 y el 8 de octubre, y el backlog es del 23. Consecuencia: el sprint 1 solo validó, y su velocidad de 5 puntos no mide la capacidad real.
2. **No registrar los cambios cuando ocurrieron.** Seis historias fuera del acta quedaron sin registro durante seis semanas, aunque el acta decía que había que registrarlas. Consecuencia: el control de cambios se reconstruyó al final, sin el motivo de cada decisión anotado en su momento.
3. **No aplicar la encuesta al interlocutor principal.** Las 4 respuestas son de empleados y el propietario no respondió. Consecuencia: el CSAT no refleja la opinión de quien decide sobre el sistema.

## 12. Declaración de uso de IA

Usé un asistente de IA (Claude Code) el 20/11/2026. Todo lo que hizo está en los commits de la rama `claude/stoic-bohr-jfvq6z` (pull request #10).

**Para qué lo usé:**

- Comparar el repositorio con el ejemplo de entrega final del curso y encontrar lo que faltaba.
- Configurar y ejecutar el análisis estático (ESLint y html-validate) y generar el anexo B.
- Corregir DEF-01, DEF-02 y DEF-03: atributos HTML y un escape en una expresión regular, sin cambiar la lógica del sistema.
- Crear la página `encuesta.html` y el script de Google Apps Script que generó el formulario de Google Forms. Las preguntas son las de mi instrumento, sin cambios.
- Redactar este documento, el plan de calidad, la propuesta del sprint 2 y las diapositivas, con los datos del repositorio, del acta y de la hoja de respuestas.
- Redactar las partes marcadas **[PROPUESTA]**: lo que no funcionó en la retrospectiva 1, las acciones M1 y M2 y las lecciones aprendidas. [CONFIRMAR: «Las revisé y las acepto», o indicar qué cambié.]

**Lo que no hizo el asistente:** no respondió la encuesta ni inventó cifras. Las respuestas vienen de la hoja de Google Forms. Las decisiones sobre los cambios, el modelo Scrum y el origen de cada función son mías.

**Lo que verifiqué manualmente:** [COMPLETAR: por ejemplo, la descarga de los CSV, que la aplicación funcione después de las correcciones y la revisión de cada propuesta]

**Otros usos de IA durante el semestre:** [COMPLETAR, o «ninguno»]

## 13. Anexos

- **A.** Actas de retrospectiva: [`RETROSPECTIVAS.md`](./RETROSPECTIVAS.md). La retrospectiva 2 se llena al cerrar el sprint 2.
- **B.** Reporte del análisis estático, antes y después de las correcciones: [`anexos/B_analisis_estatico.txt`](./anexos/B_analisis_estatico.txt).
- **C.** Casos de prueba: [`PRUEBAS.md`](../../PRUEBAS.md).
- **D.** Burndown e historial del tablero: [COMPLETAR con capturas del tablero de GitHub].
- **E.** Instrumento y respuestas: [`INSTRUMENTO_SATISFACCION.md`](../../INSTRUMENTO_SATISFACCION.md) y [`anexos/E_respuestas_encuesta.csv`](./anexos/E_respuestas_encuesta.csv), transcritas de la hoja «Respuestas: encuesta de satisfacción del inventario» de Google Forms. [COMPLETAR: captura del resumen de Google Forms]
- **F.** Acta de constitución: `ActaDeConstitucion_SamuellBaez.pdf`. Enlaces verificados en incógnito el [COMPLETAR: fecha].
