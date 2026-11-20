# Plan de control de calidad y registro de defectos

**Proyecto:** Sistema de Control de Inventario para Papelería
**Estado:** propuesta preparada con apoyo de un asistente de IA el 20/11/2026. Si existe un plan de calidad radicado antes, ese es el vigente: copie aquí sus atributos y umbrales, y registre como cambio (CC-xx) cualquier diferencia.

## 1. Atributos de calidad

| ID | Atributo | Cómo se mide | Umbral |
| --- | --- | --- | --- |
| ACQ-01 | Funcionalidad | Casos de `PRUEBAS.md` aprobados ÷ casos definidos | 100 % de 13 casos (CP-01 a CP-13) |
| ACQ-02 | Integridad de la regla de negocio | Salidas mayores al stock que el sistema acepta, en CP-04 y sus variantes (cantidad 0, negativa, decimal) | 0 aceptadas |
| ACQ-03 | Rendimiento | Tiempo en recargar `index.html` con 500 productos y 2000 movimientos guardados, promedio de 5 intentos | < 1 s |
| ACQ-04 | Mantenibilidad | Complejidad ciclomática máxima por función en `js/app.js` (ESLint, regla `complexity`) | ≤ 10 |
| ACQ-05 | Validez y accesibilidad del HTML | Errores de `html-validate` (configuración `recommended`) en `index.html` | 0 errores |

## 2. Mediciones

| ID | Medición 1 · 20/11/2026, antes de corregir | Medición 2 · 20/11/2026, después de DEF-01 a DEF-03 | Medición de cierre |
| --- | --- | --- | --- |
| ACQ-01 | 11 de 13 aprobados y 2 parciales (CP-10 y CP-11, descarga pendiente), según `PRUEBAS.md` del 12/11/2026 | Sin cambio: hace falta la prueba manual de la descarga | [COMPLETAR] |
| ACQ-02 | 0 aceptadas en CP-04 (`PRUEBAS.md`, 12/11/2026). Las variantes 0, negativa y decimal no se han probado | — | [COMPLETAR] |
| ACQ-03 | Sin medir | Sin medir | [COMPLETAR] |
| ACQ-04 | Máximo 9 (función anónima de la línea 160, registro de movimiento). 39 funciones, ninguna mayor que 10 | Máximo 9 | [COMPLETAR] |
| ACQ-05 | 18 errores: 3 `no-implicit-button-type` y 15 `wcag/h63` | 0 errores | [COMPLETAR] |

Las mediciones 1 y 2 de ACQ-04 y ACQ-05 las tomó el asistente de IA con las mismas herramientas que quedan en el repositorio. Para la medición de cierre, ejecútelas usted:

```bash
npm install
npm run analisis
```

Para ver el valor exacto de complejidad de cada función, baje temporalmente el umbral de `complexity` a `0` en `eslint.config.mjs` y vuelva a ejecutar `npm run analisis:js`.

## 3. Registro de defectos

| ID | Defecto | Severidad | Encontrado | Estado |
| --- | --- | --- | --- | --- |
| DEF-01 | Los 3 botones del menú no declaran `type="button"` (`index.html`, líneas 26, 30 y 34) | Baja | 20/11/2026, html-validate | Corregido en la rama `claude/stoic-bohr-jfvq6z`, pendiente de su revisión |
| DEF-02 | Los 15 encabezados `<th>` de las tres tablas no declaran `scope="col"`, así que un lector de pantalla no asocia las celdas con su encabezado | Media | 20/11/2026, html-validate | Corregido en la misma rama, pendiente de revisión |
| DEF-03 | Escape innecesario `\"` dentro de una expresión regular en `escaparValorCSV` (`js/app.js`, línea 777). No cambia el resultado del CSV | Baja | 20/11/2026, ESLint `no-useless-escape` | Corregido en la misma rama, pendiente de revisión |
| DEF-04 | Los issues #6 y #7 marcan CP-10 y CP-11 como «Aprobado», pero `PRUEBAS.md` los deja como «Parcial» | Media (evidencia inconsistente) | 20/11/2026, revisión de GitHub | Abierto: pruebe la descarga y deje issues y documentos con el mismo estado |
| DEF-05 | `HISTORIAS_USUARIO.md` citaba `BITACORA_SESION_SEMANA12.html`, que no está en el repositorio | Media (evidencia faltante) | 20/11/2026 | Referencia marcada como pendiente; suba el archivo si lo tiene |

Antes de aceptar DEF-01 a DEF-03: abra `index.html`, cambie de sección con los tres botones, exporte los dos CSV y revise que la consola no muestre errores (DoD, punto 7). Si todo funciona, integre la rama a `main`.
