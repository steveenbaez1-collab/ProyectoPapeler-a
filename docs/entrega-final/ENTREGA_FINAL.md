# Entrega final: Sistema de Control de Inventario para Papelería

> **Borrador preparado con un asistente de IA el 20/11/2026.** Cada dato que aparece aquí sale del repositorio o de GitHub, y se indica de dónde viene. Lo marcado **[COMPLETAR]** solo lo puede llenar usted: decisiones, horas, riesgos, respuestas de la encuesta, retrospectivas y lecciones. No entregue este documento sin revisarlo completo y sin llenar las marcas. Antes de entregar, borre este recuadro.

---

## 1. Portada e identificación

- **Espacio académico:** [COMPLETAR] · **Universidad:** [COMPLETAR] · **Semana:** [COMPLETAR]
- **Integrante:** Samuell Steveen Baez Diaz. Proyecto individual con autorización de la docente (`ESTANDARES.md`, sección 1).

| Integrante | Sprint 1 | Sprint 2 |
| --- | --- | --- |
| Samuell Steveen Baez Diaz | Product Owner, Scrum Master y desarrollo | Product Owner, Scrum Master y desarrollo |

**Rotación de roles:** no aplica, porque el equipo es de una persona. La revisión de cada cambio se hace con la política de auto-revisión de `ESTANDARES.md`, sección 6.

**Enlaces:** repositorio [COMPLETAR] · tablero [COMPLETAR] · formulario de satisfacción [COMPLETAR]. Verifíquelos en una ventana de incógnito el día antes de radicar.

## 2. Resumen ejecutivo

[COMPLETAR. Una página como máximo. Puede partir de estos hechos:]

- **Qué se construyó:** un sistema web en HTML, CSS y JavaScript para registrar productos, entradas y salidas, consultar existencias, buscar y filtrar, conservar los datos en el navegador y exportar a CSV. Regla principal: no se acepta una salida mayor que el stock.
- **Para quién:** el propietario de la papelería, que es el interlocutor principal, y los empleados encargados del inventario (acta, sección 6).
- **Cómo:** [COMPLETAR: el modelo de la sección 4], con un backlog de 11 historias y 31 puntos.
- **Resultado:** [COMPLETAR al cierre: puntos terminados de 31 y estado de los ACQ]. Encuesta del 20/11/2026: 4 respuestas, todas de empleados; CSAT de 67 % (2 de 3 respuestas válidas).

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
| CC-01 | Se agregaron la búsqueda de productos (HU-06) y los filtros por estado de stock (HU-07) y por tipo de movimiento (HU-08), que no estaban en los cuatro bloques del acta | 08/10/2026 (commits `cbcee4b`, `77362ee`, `dc2627d`) | [COMPLETAR] | [COMPLETAR] |
| CC-02 | Se agregó la conservación de datos al recargar (HU-09) | 08/10/2026 (commit `f0be885`) | [COMPLETAR] | [COMPLETAR] |
| CC-03 | Se agregó la exportación a CSV del inventario y del historial (HU-10 y HU-11) | 08/10/2026 (commits `70dbb6b`, `41bface`) | [COMPLETAR] | [COMPLETAR] |
| CC-04 | Se agregó la exclusión «sincronización entre dispositivos», consecuencia de guardar los datos en el navegador | 23/10/2026 (`HISTORIAS_USUARIO.md`) | Los datos quedan solo en el navegador donde se registran | [COMPLETAR] |
| CC-05 | El acta proponía terminar el 6 a 9 de octubre; el proyecto siguió con backlog, sprints y entrega final | 23/10/2026 | [COMPLETAR] | [COMPLETAR] |
| CC-06 | Se adoptó el plan de calidad con cinco atributos (ACQ-01 a ACQ-05) | 20/11/2026 | Medir la calidad con umbrales verificables | [COMPLETAR] |

El acta indica en su matriz de riesgos «Registrar cambios y revisar su impacto antes de incorporarlos», pero CC-01 a CC-05 no se registraron cuando ocurrieron. Ver la sección 7.

## 4. Modelo de proceso adoptado

[COMPLETAR: qué modelo eligió, con qué criterios de este proyecto (trabajo individual, disponibilidad del cliente, incertidumbre de los requisitos), qué descartó y por qué, y si cambió algo durante el semestre.]

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
| 1 | Una persona quedó insatisfecha, no dejó comentario y no probó la salida mayor al stock. No se sabe la causa | [COMPLETAR: por ejemplo, preguntarle qué le faltó y registrar la respuesta] |
| 2 | El propietario, interlocutor principal según el acta, no respondió. Las 4 respuestas son de empleados | [COMPLETAR: aplicarla al propietario o explicar por qué no fue posible] |
| 3 | Un comentario pide «agregar nuevas funciones a la medida que lleguen más productos». Es una petición abierta, sin una función concreta | [COMPLETAR: por ejemplo, registrarla como historia candidata para una segunda versión, sin comprometerla, con el cambio CC correspondiente] |
| 4 | Dos de las cuatro personas marcaron «No lo probé» en alguna pregunta: la invitación no garantizó que probaran todos los flujos | [COMPLETAR: por ejemplo, incluir los pasos de prueba en el formulario] |

**Evidencia:** exporte la hoja de respuestas a CSV y guarde una captura del resumen de Google Forms para el anexo E.

## 11. Lecciones aprendidas

**Tres decisiones acertadas:** [COMPLETAR, cada una con su evidencia]

**Tres errores, cada uno con su consecuencia:** [COMPLETAR. Para empezar, revise los hechos de la retrospectiva 1.]

## 12. Declaración de uso de IA

**Lo que hizo el asistente de IA (Claude Code) el 20/11/2026:** esto está registrado en los commits de la rama `claude/stoic-bohr-jfvq6z`.

- Comparó el repositorio con el ejemplo de entrega final del curso y señaló lo que faltaba.
- Ejecutó el análisis estático (ESLint y html-validate) y dejó la configuración en el repositorio.
- Corrigió DEF-01, DEF-02 y DEF-03, que son cambios de atributos HTML y de un escape en una expresión regular. No cambió la lógica de la aplicación.
- Redactó la propuesta de plan de calidad, la propuesta del sprint 2, las plantillas de retrospectiva y este borrador.
- No escribió respuestas de la encuesta, actas de retrospectiva, horas, riesgos ni lecciones aprendidas.

**Lo que verifiqué manualmente:** [COMPLETAR]

**Otros usos de IA durante el semestre:** [COMPLETAR]

## 13. Anexos

- **A.** Actas de retrospectiva: `RETROSPECTIVAS.md` [COMPLETAR]
- **B.** Reportes del análisis estático: salida de `npm run analisis` en cada medición [COMPLETAR, con capturas]
- **C.** Casos de prueba: `PRUEBAS.md`
- **D.** Burndown e historial del tablero [COMPLETAR, con capturas]
- **E.** Instrumento de satisfacción y respuestas: hoja «Respuestas: encuesta de satisfacción del inventario» (4 respuestas del 20/11/2026) [COMPLETAR: adjuntar el CSV y la captura]
- **F.** Enlaces verificados en incógnito el [COMPLETAR: fecha]
