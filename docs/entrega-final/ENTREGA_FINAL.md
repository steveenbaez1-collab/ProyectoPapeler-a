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
- **Para quién:** [COMPLETAR: la papelería, el dueño y el encargado de inventario].
- **Cómo:** [COMPLETAR: el modelo de la sección 4], con un backlog de 11 historias y 31 puntos.
- **Resultado:** [COMPLETAR al cierre: puntos terminados de 31, estado de los ACQ y CSAT con el número de respuestas].

## 3. Acta de constitución final y control de cambios

Copie aquí el acta vigente y registre cada cambio frente a la versión radicada.

| N.º | Qué cambió | Fecha | Por qué | Quién lo decidió |
| --- | --- | --- | --- | --- |
| CC-01 | [COMPLETAR. Pista: HU-09, conservar datos al recargar, tiene un ID posterior a HU-05 pero quedó entre HU-05 y HU-06 en el backlog. ¿Se agregó después?] | | | |
| CC-02 | [COMPLETAR. Pista: la exportación a CSV (HU-10 y HU-11) se programó el 8/10/2026. ¿Estaba en el acta original?] | | | |
| CC-03 | [COMPLETAR si adoptó el plan de calidad de `PLAN_CALIDAD.md` o cambió algún umbral] | | | |

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

**Terminados:** 16 de 31 puntos. **Fuera del alcance:** ventas en línea, facturación electrónica, aplicación móvil y sincronización entre dispositivos. **Historias nuevas que salgan de la encuesta:** [COMPLETAR]. **Story map:** [COMPLETAR o anexar].

## 6. Gestión del tiempo

| Hito del acta | Fecha comprometida | Fecha real | Observación |
| --- | --- | --- | --- |
| Estándares del proyecto | [COMPLETAR] | 02/10/2026 (commit `e3db591`) | |
| Primera versión funcional | [COMPLETAR] | 03/10/2026 (commit `bb9db7f`) | |
| Backlog de historias | [COMPLETAR] | 23/10/2026 (commit `86748f5`) | |
| Sprint 1 cerrado | [COMPLETAR] | 30/10/2026 (issues #8 y #9) | |
| Encuesta aplicada | [COMPLETAR] | [COMPLETAR] | |

| Sprint | Comprometido | Terminado | Velocidad |
| --- | ---: | ---: | ---: |
| Sprint 1 | 5 | 5 | 5 |
| Sprint 2 | [COMPLETAR] | [COMPLETAR] | [COMPLETAR] |

**Interpretación (verifíquela):** las funciones de todas las historias se programaron entre el 3 y el 8 de octubre, antes de que existiera el backlog. Por eso el sprint 1 midió validación y documentación, no construcción. Compárelo con el sprint 2 teniendo esto presente.

**Horas estimadas frente a horas reales:** [COMPLETAR].

## 7. Gestión de riesgos

| ID | Riesgo del acta | ¿Ocurrió? | Qué se hizo |
| --- | --- | --- | --- |
| [COMPLETAR con los riesgos del acta] | | | |

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

**Instrumento:** `INSTRUMENTO_SATISFACCION.md` (4 preguntas y perfil de uso). La versión con sesgos que se corrigió está en `BORRADOR_INSTRUMENTO_SATISFACCION.md`.

- **Aplicado el:** [COMPLETAR] · **Respondieron:** [COMPLETAR: número y perfil, sin nombres]
- **CSAT** = respuestas de 4 o 5 en la pregunta 4 ÷ respuestas válidas = [COMPLETAR]

| Brecha | Qué esperaba el cliente | Qué se hizo |
| --- | --- | --- |
| [COMPLETAR con las respuestas reales] | | |

Si no alcanza a aplicar la encuesta, escriba «sin medición» y explique por qué. No ponga un porcentaje que no midió.

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
- **E.** Instrumento de satisfacción y respuestas [COMPLETAR]
- **F.** Enlaces verificados en incógnito el [COMPLETAR: fecha]
