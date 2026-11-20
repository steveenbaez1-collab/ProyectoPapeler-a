/**
 * Crea en su cuenta de Google el formulario de la encuesta de satisfacción
 * del Sistema de Control de Inventario para Papelería, con una hoja de cálculo
 * vinculada donde quedan las respuestas.
 *
 * Uso:
 *  1. Entre a https://script.google.com y pulse «Nuevo proyecto».
 *  2. Borre el contenido, pegue este archivo completo y guarde (Ctrl + S).
 *  3. Elija la función crearFormulario y pulse «Ejecutar».
 *  4. Autorice el acceso con su cuenta. Google mostrará un aviso porque el
 *     script es suyo y no está verificado: «Configuración avanzada» →
 *     «Ir a … (no seguro)» → «Permitir».
 *  5. Abra «Registro de ejecución»: ahí aparecen los enlaces para compartir y
 *     editar el formulario, y el de la hoja de respuestas.
 *
 * Las preguntas son las de INSTRUMENTO_SATISFACCION.md, sin cambios.
 */
function crearFormulario() {
  const form = FormApp.create(
    'Encuesta de satisfacción: Sistema de Control de Inventario para Papelería'
  );

  form
    .setDescription(
      'Esta encuesta busca conocer cómo fue usar el sistema de inventario e identificar qué conviene mejorar. ' +
        'Respóndala después de probar la consulta del inventario y el registro de entradas y salidas. ' +
        'Participar es voluntario y no se pide nombre ni información personal. ' +
        'Marque una opción por pregunta. Si no alcanzó a probar una función, elija «No lo probé». ' +
        'No hay respuestas correctas o incorrectas.\n\n' +
        'Sistema: https://steveenbaez1-collab.github.io/ProyectoPapeler-a/'
    )
    .setCollectEmail(false)
    .setLimitOneResponsePerUser(false)
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false)
    .setConfirmationMessage('¡Gracias! Su respuesta quedó registrada.');

  form
    .addMultipleChoiceItem()
    .setTitle('Perfil de uso')
    .setChoiceValues([
      'Propietario(a)',
      'Empleado(a) que registra o consulta inventario',
    ])
    .showOtherOption(true)
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('1. ¿Qué tan fácil fue encontrar la cantidad disponible de un producto?')
    .setChoiceValues([
      'Muy difícil',
      'Difícil',
      'Ni fácil ni difícil',
      'Fácil',
      'Muy fácil',
      'No lo probé',
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('2. ¿Qué tan claro fue el resultado después de registrar una entrada de producto?')
    .setChoiceValues([
      'Nada claro',
      'Poco claro',
      'Medianamente claro',
      'Claro',
      'Muy claro',
      'No lo probé',
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('3. Al intentar registrar una salida mayor que las existencias, ¿qué ocurrió?')
    .setHelpText('Si ocurrió algo distinto, escríbalo en «Otro».')
    .setChoiceValues([
      'El sistema la rechazó y mostró un mensaje',
      'La aceptó',
      'No lo probé',
    ])
    .showOtherOption(true)
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle(
      '4. En general, ¿qué tan satisfecho(a) quedó con el sistema para llevar el control básico del inventario?'
    )
    .setChoiceValues([
      'Muy insatisfecho(a)',
      'Insatisfecho(a)',
      'Ni satisfecho(a) ni insatisfecho(a)',
      'Satisfecho(a)',
      'Muy satisfecho(a)',
      'No lo probé',
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Comentario opcional: ¿qué cambio concreto le ayudaría más al usar el sistema?')
    .setRequired(false);

  const hoja = SpreadsheetApp.create('Respuestas: encuesta de satisfacción del inventario');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  Logger.log('Enlace para compartir (envíelo a la papelería): ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('Enlace para editar el formulario: ' + form.getEditUrl());
  Logger.log('Hoja de respuestas: ' + hoja.getUrl());
}
