# Estándares del proyecto

## 1. Contexto

Estos acuerdos corresponden al Sistema de Control de Inventario para Papelería, una aplicación web sin framework, desarrollada con HTML5, CSS3 y JavaScript en Visual Studio Code. El proyecto lo desarrolla Samuell Steveen Baez Diaz de manera individual, con autorización de la docente.

## 2. Estilo y nombres

- Para HTML se toma como referencia el HTML Living Standard; para CSS y JavaScript, las guías de MDN.
- Los textos de la interfaz y la documentación se escriben en español. Los nombres del código siguen el idioma usado actualmente en el proyecto: español.
- El proyecto usa el formateo integrado de Visual Studio Code y tiene activado `editor.formatOnSave` en `.vscode/settings.json`. También se puede aplicar **Format Document**.

Reglas propias de nombres:

1. Las variables y funciones de JavaScript usan `camelCase` y nombres que describen su dato o acción, por ejemplo `stockMinimo` y `actualizarInterfaz`.
2. Las clases CSS usan minúsculas separadas por guiones, por ejemplo `.boton-principal` y `.tabla-contenedor`.
3. Los archivos de código usan nombres en minúscula; los documentos conservan los nombres acordados, como `README.md` y `ESTANDARES.md`.

## 3. Commits y ramas

Formato del mensaje:

```text
tipo(alcance): descripción breve en español
```

Tipos permitidos: `feat` (funcionalidad), `fix` (corrección), `docs` (documentación), `style` (presentación o formato), `refactor` (reorganización), `test` (pruebas) y `chore` (mantenimiento).

Ejemplos: `feat(inventario): mostrar productos con stock bajo`; `fix(productos): validar cantidades enteras`; `docs(estandares): ajustar acuerdos del proyecto`.

La rama `main` contiene la versión entregable. Para un cambio que lo justifique se pueden usar ramas `feat/nombre-corto`, `fix/nombre-corto` o `docs/nombre-corto`; no se exige una rama `develop` para este proyecto individual.

## 4. Definition of Ready

Una tarea está lista para comenzar cuando:

1. Tiene una descripción de qué se necesita cambiar.
2. Define un resultado que se pueda observar en la aplicación o en sus archivos.
3. Identifica la sección o archivos relacionados (`index.html`, `css/estilos.css`, `js/app.js` o documentación).
4. Cuenta con los datos necesarios para verificar el resultado, cuando aplique.
5. No contradice el alcance ni la regla de negocio de impedir salidas superiores al stock disponible.

## 5. Definition of Done

Una tarea se considera terminada cuando se puede comprobar que:

1. El cambio está guardado en los archivos del repositorio y el commit usa el formato acordado.
2. La aplicación abre desde `index.html` y muestra la sección modificada.
3. El resultado cumple el criterio descrito para la tarea.
4. Los flujos de inventario afectados se registran con datos, resultado esperado y resultado observado en `PRUEBAS.md`.
5. Una salida superior a las existencias no reduce el stock y muestra el rechazo.
6. El autor revisó el diff y comprobó los criterios antes de integrar el cambio; la evidencia queda en el historial del repositorio o en `PRUEBAS.md`.
7. Al repetir el flujo afectado, la consola del navegador no muestra errores de JavaScript.

## 6. Política de revisión

Como el proyecto es individual y cuenta con autorización docente, Samuell revisa cada cambio antes de integrarlo: compara el diff con el criterio de aceptación y ejecuta los casos afectados. Esta auto-revisión se realiza antes del commit o de integrar una rama, no después de una solicitud a otra persona. Si la docente o un compañero ofrece revisión, se consideran sus observaciones dentro de las siguientes 24 horas de recibirlas.

Bloquean la integración:

- Una salida mayor que el stock reduce las existencias o deja una cantidad negativa.
- El cambio no cumple el criterio observable de la tarea.
- El flujo afectado produce un error de JavaScript en la consola.
- El commit no respeta el formato acordado o incluye credenciales/datos sensibles.

No bloquean la integración:

- Sugerencias de nombres que no afectan la comprensión ni el funcionamiento.
- Mejoras visuales que no forman parte de la tarea.
- Funcionalidades futuras fuera del alcance actual.

Los comentarios deben señalar archivo o sección, comportamiento observado, impacto y una corrección sugerida. Se refieren al código, no a la persona.

## 7. Aceptación

| Integrante | Aceptación |
| --- | --- |
| Samuell Steveen Baez Diaz | conozco y acepto estos estándares |
