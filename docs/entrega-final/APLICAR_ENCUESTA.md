# Cómo aplicar la encuesta de satisfacción

Son cuatro pasos y toman unos 15 minutos. Las preguntas son las mismas de `INSTRUMENTO_SATISFACCION.md`, sin cambios.

**Antes de empezar:** una el pull request #10 a `main`. GitHub Pages publica la rama `main`, y `encuesta.html` y las correcciones del sistema solo están en la rama del PR hasta que lo una.

## Paso 1. Publicar el sistema (2 minutos)

1. En GitHub, abra el repositorio y entre a **Settings → Pages**.
2. En **Build and deployment**, elija **Source: Deploy from a branch**, la rama **main** y la carpeta **/ (root)**. Pulse **Save**.
3. Espere uno o dos minutos. El sistema queda en:
   **https://steveenbaez1-collab.github.io/ProyectoPapeler-a/**
4. Ábralo en una ventana de incógnito y en el celular para comprobar que carga.

Los datos que registre cada persona se guardan solo en su propio navegador. Nadie ve los datos de otro ni los suyos.

## Paso 2. Elegir el formulario

### Opción A: la encuesta del propio proyecto, con envío por WhatsApp (1 minuto)

El repositorio trae `encuesta.html`, con las mismas preguntas del instrumento. Cada persona responde y su respuesta le llega a usted como mensaje de WhatsApp. No usa cuentas ni servidores, y no guarda nada en el navegador.

1. Abra `js/encuesta.js` y escriba su número en `NUMERO_WHATSAPP`: código de país más número, solo dígitos. Ejemplo para Colombia: `"573001234567"`. Haga commit.
2. Una vez publicado el sistema (paso 1), la encuesta queda en **https://steveenbaez1-collab.github.io/ProyectoPapeler-a/encuesta.html**
3. Cada respuesta llega a su WhatsApp con la fecha. Guarde capturas de los mensajes como anexo E y pase las respuestas a la tabla «Registro de aplicación».

Si deja el número vacío, la encuesta avisa que todavía no está configurada y no envía nada.

### Opción B: Google Forms creado con un script (recomendada, 3 minutos)

`crear_formulario_google.gs` arma el formulario completo en su cuenta de Google, junto con una hoja de cálculo para las respuestas.

1. Entre a https://script.google.com y pulse **Nuevo proyecto**.
2. Borre lo que trae, pegue todo el contenido de `crear_formulario_google.gs` y guarde.
3. Elija la función `crearFormulario` y pulse **Ejecutar**. Autorice el acceso. Como el script es suyo, Google muestra un aviso: **Configuración avanzada → Ir a … (no seguro) → Permitir**.
4. En **Registro de ejecución** aparecen tres enlaces: el corto para compartir, el de edición y el de la hoja de respuestas.

### Opción C: Google Forms a mano (10 minutos)

Entre a forms.google.com, cree un formulario en blanco y copie esto tal cual.

**Título:** Encuesta de satisfacción: Sistema de Control de Inventario para Papelería

**Descripción:**
> Esta encuesta busca conocer cómo fue usar el sistema de inventario e identificar qué conviene mejorar. Respóndala después de probar la consulta del inventario y el registro de entradas y salidas. Participar es voluntario y no se pide nombre ni información personal. Marque una opción por pregunta. Si no alcanzó a probar una función, elija «No lo probé». No hay respuestas correctas o incorrectas.

En **Configuración → Respuestas**, deje **desactivado** «Recopilar direcciones de correo electrónico».

| N.º | Pregunta (marque **Obligatoria**) | Tipo | Opciones, en este orden |
| --- | --- | --- | --- |
| 0 | Perfil de uso | Opción múltiple | Propietario(a) · Empleado(a) que registra o consulta inventario · active la opción «Otro» para otro usuario autorizado |
| 1 | ¿Qué tan fácil fue encontrar la cantidad disponible de un producto? | Opción múltiple | Muy difícil · Difícil · Ni fácil ni difícil · Fácil · Muy fácil · No lo probé |
| 2 | ¿Qué tan claro fue el resultado después de registrar una entrada de producto? | Opción múltiple | Nada claro · Poco claro · Medianamente claro · Claro · Muy claro · No lo probé |
| 3 | Al intentar registrar una salida mayor que las existencias, ¿qué ocurrió? | Opción múltiple | El sistema la rechazó y mostró un mensaje · La aceptó · No lo probé · Otro (active la opción «Otro» para «Ocurrió algo distinto») |
| 4 | En general, ¿qué tan satisfecho(a) quedó con el sistema para llevar el control básico del inventario? | Opción múltiple | Muy insatisfecho(a) · Insatisfecho(a) · Ni satisfecho(a) ni insatisfecho(a) · Satisfecho(a) · Muy satisfecho(a) · No lo probé |
| 5 | ¿Qué cambio concreto le ayudaría más al usar el sistema? | Párrafo, **no** obligatoria | — |

Pulse **Enviar → enlace (icono de cadena) → Acortar URL** y copie el enlace.

## Paso 3. Enviar el mensaje

Envíelo por WhatsApp al dueño y a los empleados de la papelería:

> Hola, estoy terminando el sistema de inventario para la papelería como proyecto de la universidad. ¿Me ayudas probándolo unos 10 minutos y respondiendo unas preguntas cortas?
>
> 1. Abre el sistema: https://steveenbaez1-collab.github.io/ProyectoPapeler-a/
> 2. Registra un producto, haz una entrada y una salida, y prueba a sacar más unidades de las que hay.
> 3. Responde aquí, es anónimo: [ENLACE DE LA ENCUESTA]

Reemplace [ENLACE DE LA ENCUESTA] por el enlace corto de Google Forms (opciones B o C) o por https://steveenbaez1-collab.github.io/ProyectoPapeler-a/encuesta.html (opción A).
>
> ¡Muchas gracias!

## Paso 4. Guardar las respuestas como evidencia

1. Con la opción A, guarde capturas de los mensajes de WhatsApp. Con las opciones B o C, en Google Forms, en la pestaña **Respuestas**, descargue la hoja de cálculo (icono de Sheets → Descargar → CSV) y tome una captura del resumen. Ese es el anexo E.
2. Llene la tabla «Registro de aplicación» de `INSTRUMENTO_SATISFACCION.md` con la fecha real, los perfiles y el número de respuestas válidas.
3. **CSAT** = respuestas «Satisfecho(a)» o «Muy satisfecho(a)» en la pregunta 4 ÷ respuestas válidas a la pregunta 4 (sin contar «No lo probé») × 100.
4. Si alguien responde «La aceptó» en la pregunta 3, repita CP-04 y corrija el sistema antes de dar la regla por buena.

Cuando tenga las respuestas, compártalas con el asistente para llenar la sección 10 de `ENTREGA_FINAL.md`: el CSAT con el cálculo a la vista, las brechas y la decisión tomada con cada una.
