# Estándares del equipo

## 1. Contexto del proyecto

Estos estándares aplican al **Sistema de Control de Inventario para Papelería**. El proyecto es una aplicación web estática desarrollada con **HTML5, CSS3 y JavaScript (ES6+)**, sin framework, y editada en **Visual Studio Code**. El repositorio se administra con Git y se publica en GitHub.

## 2. Guía de estilo y nombres

- HTML: se adopta el estándar [HTML Living Standard](https://html.spec.whatwg.org/).
- CSS: se adopta la guía [MDN CSS](https://developer.mozilla.org/es/docs/Web/CSS).
- JavaScript: se adopta la guía [JavaScript Standard Style](https://standardjs.com/).
- El código, nombres de variables, funciones, clases, archivos y ramas se escriben en inglés. Los textos mostrados a la persona usuaria y los documentos del proyecto se escriben en español.
- Visual Studio Code está configurado para formatear al guardar (`editor.formatOnSave`). También se puede usar la opción **Format Document** para mantener la indentación ordenada en HTML, CSS y JavaScript.

### Reglas propias de nombres

1. Las variables y funciones de JavaScript usan `camelCase` y expresan una acción o dato concreto: `actualizarInventario`, `cantidadDisponible`.
2. Las clases CSS usan minúsculas y guiones (`kebab-case`): `.boton-principal`, `.tabla-contenedor`.
3. Los archivos se nombran en minúscula; los documentos raíz requeridos conservan su nombre convencional: `index.html`, `app.js`, `estilos.css`, `README.md` y `ESTANDARES.md`.

## 3. Convención de commits y ramas

Cada commit debe usar el formato:

```text
tipo(alcance): descripción breve en español
```

Tipos permitidos:

- `feat`: nueva funcionalidad.
- `fix`: corrección de un error.
- `docs`: cambios en documentación.
- `style`: formato o estilos sin modificar lógica.
- `refactor`: reorganización sin modificar el comportamiento.
- `test`: pruebas o verificaciones.
- `chore`: configuración o mantenimiento.

Ejemplos válidos:

```text
feat(inventario): registrar entradas de productos
fix(salidas): impedir cantidades superiores al stock
docs(estandares): agregar acuerdos del equipo
```

Esquema de ramas:

- `main`: versión estable y entregable del proyecto.
- `feat/nombre-corto`: una funcionalidad nueva que requiere varios cambios.
- `fix/nombre-corto`: una corrección.
- `docs/nombre-corto`: documentación.

Los cambios pequeños de documentación pueden hacerse directamente en `main` después de la revisión definida en este documento. Las funcionalidades o correcciones que requieran varios cambios se trabajan en su rama y luego se integran en `main`.

## 4. Definition of Ready

Una tarea puede empezar solo si cumple todas estas condiciones:

1. Tiene un título y una descripción que indiquen qué parte del sistema se modificará.
2. Indica criterios de aceptación observables, por ejemplo: “al registrar una salida mayor al stock, la aplicación muestra un mensaje de rechazo y no reduce la cantidad disponible”.
3. Identifica los archivos o la sección afectada (`index.html`, `css/estilos.css` o `js/app.js`).
4. El equipo conoce los datos necesarios para probarla (producto, cantidad inicial y movimiento esperado cuando aplique).
5. No contradice la regla de negocio: una salida no puede dejar el inventario con cantidades negativas.

## 5. Definition of Done

Una tarea está terminada solo cuando un tercero pueda comprobar todos estos puntos al abrir el repositorio:

1. El cambio está en una rama apropiada y su commit sigue la convención definida en este documento.
2. Los archivos modificados tienen una indentación ordenada y se guardaron con el formateo automático de Visual Studio Code.
3. La funcionalidad cumple los criterios de aceptación de la tarea al abrir `index.html` en un navegador.
4. Si modifica inventario, se verificaron una entrada, una salida válida y una salida rechazada por superar el stock; el resultado queda visible en la interfaz o en el historial de movimientos.
5. No hay errores en la consola del navegador al ejecutar el flujo afectado.
6. Antes de integrar el cambio, se realizó una revisión con la lista de criterios de aceptación y se registró el resultado en el commit, issue o evidencia acordada.
7. Si se usó una rama de trabajo, el cambio está integrado en `main` sin conflictos.

## 6. Política de revisión de código

### Quién revisa y plazo

El proyecto cuenta con autorización docente para ser desarrollado por un solo integrante. Por esta razón, Samuell Steveen Baez Diaz realiza una revisión separada de su propia implementación antes de integrar cada cambio. La revisión debe realizarse dentro de las 24 horas posteriores a terminar la tarea y comprobar los criterios de aceptación definidos.

### Causales que bloquean la integración

- La salida permite retirar una cantidad superior al stock disponible o deja el stock negativo.
- La funcionalidad no cumple un criterio de aceptación definido.
- El navegador muestra un error de JavaScript al realizar el flujo afectado.
- El commit no sigue la convención acordada o el código tiene una indentación desordenada.
- El cambio incluye credenciales, contraseñas o datos sensibles.

### Situaciones que no bloquean la integración

- Sugerencias de nombres que no alteran la comprensión ni el funcionamiento.
- Mejoras visuales o funcionalidades futuras que no pertenecen a la tarea revisada.
- Preferencias de formato que se pueden corregir usando **Format Document**.

### Cómo se comenta

Los comentarios se dirigen al código, nunca a la persona. Deben indicar el archivo o sección, el problema comprobable, el impacto y una propuesta concreta cuando sea posible.

Ejemplo: “En `js/app.js`, la salida no valida la cantidad disponible antes de descontar el stock. Esto permitiría cantidades negativas. Validar `cantidad > producto.cantidad` antes de actualizar el producto.”

## 7. Aceptación

| Integrante | Aceptación |
| --- | --- |
| Samuell Steveen Baez Diaz | Conozco y acepto estos estándares. |

> El proyecto se desarrolla de manera individual con autorización de la docente, debido a que no fue posible conformar pareja de trabajo.

## 8. Declaración de uso de IA

Se utilizó ChatGPT como apoyo para organizar una primera versión del documento de estándares. El equipo revisó y ajustó manualmente el contenido para que corresponda a este proyecto, sus tecnologías y sus acuerdos de trabajo.
