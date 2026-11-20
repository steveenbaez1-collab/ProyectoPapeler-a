# Sprint 2: propuesta de planificación

**Estado:** propuesta, no ejecutada. Ajústela, ponga las fechas reales y mueva las tarjetas en el tablero a medida que avance. El sprint cuenta solo si el historial del tablero y los commits lo muestran.

**Objetivo propuesto:** al final del sprint, el encargado de inventario puede exportar el inventario y el historial a archivos CSV verificados, y la interfaz cumple los criterios de validez y accesibilidad del plan de calidad.

| ID | Trabajo | Puntos | Cómo se comprueba que terminó |
| --- | --- | ---: | --- |
| HU-10 | Cerrar la exportación del inventario a CSV | 3 | Archivo descargado y abierto en una hoja de cálculo; CP-10 «Aprobado» con fecha en `PRUEBAS.md`; issue #6 con el mismo estado |
| HU-11 | Cerrar la exportación del historial a CSV | 3 | Igual que HU-10, con CP-11 e issue #7 |
| HU-06 a HU-09 | Verificar la DoD pendiente | — (ya estimadas) | Los 7 puntos de la DoD marcados en `PRUEBAS.md` para cada historia |
| DEF-01 a DEF-03 | Revisar e integrar las correcciones de la rama | — | `npm run analisis` sin errores y la app funcionando |
| Calidad | Medición de cierre de ACQ-01 a ACQ-05 | — | Columna «Medición de cierre» de `PLAN_CALIDAD.md` llena |
| Satisfacción | Aplicar el instrumento | — | Respuestas reales registradas en `INSTRUMENTO_SATISFACCION.md` |

**Comprometido en el sprint 2:** 6 puntos (HU-10 y HU-11).

## Datos que debe registrar durante el sprint

Sin estos datos, la sección 9 de la entrega no se puede llenar:

- La fecha en que cada tarjeta entra a «En progreso» y a «Terminado». De ahí salen el lead time y el cycle time.
- Los puntos que quedan pendientes al final de cada día. Con eso se dibuja el burndown.
- Las horas reales dedicadas, para comparar con lo estimado en el acta.
- La evidencia de que aplicó las acciones de mejora de la retrospectiva 1.
