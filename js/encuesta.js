// ==========================================
// ENCUESTA DE SATISFACCIÓN
// Las respuestas se envían por WhatsApp al responsable del proyecto.
// No se guardan en el navegador ni en ningún servidor.
// ==========================================

// Número que recibe las respuestas: código de país + número, solo dígitos.
// Ejemplo para Colombia: "573001234567".
const NUMERO_WHATSAPP = "";

const PREGUNTAS = [
    { nombre: "perfil", texto: "Perfil", otro: "perfilOtro", valorOtro: "Otro usuario autorizado" },
    { nombre: "p1", texto: "1. Facilidad para encontrar la cantidad disponible" },
    { nombre: "p2", texto: "2. Claridad del resultado al registrar una entrada" },
    { nombre: "p3", texto: "3. Salida mayor que las existencias", otro: "p3Otro", valorOtro: "Ocurrió algo distinto" },
    { nombre: "p4", texto: "4. Satisfacción general" }
];

document
    .getElementById("formularioEncuesta")
    .addEventListener("submit", function(evento) {

        evento.preventDefault();

        const lineas = ["Encuesta de satisfacción · Inventario Papelería", ""];
        let faltantes = 0;

        PREGUNTAS.forEach(function(pregunta) {
            const marcada = document.querySelector(
                "input[name='" + pregunta.nombre + "']:checked"
            );
            const grupo = document
                .querySelector("input[name='" + pregunta.nombre + "']")
                .closest("fieldset");

            grupo.classList.toggle("pregunta-incompleta", !marcada);

            if (!marcada) {
                faltantes++;
                return;
            }

            let valor = marcada.value;

            if (pregunta.otro && valor === pregunta.valorOtro) {
                const detalle = document.getElementById(pregunta.otro).value.trim();

                if (detalle !== "") {
                    valor += ": " + detalle;
                }
            }

            lineas.push(pregunta.texto + ": " + valor);
        });

        if (faltantes > 0) {
            mostrarMensaje(
                "Falta responder " + faltantes + " pregunta(s), marcadas en rojo.",
                "error"
            );
            return;
        }

        const comentario = document.getElementById("comentario").value.trim();
        lineas.push("Comentario: " + (comentario === "" ? "(sin comentario)" : comentario));
        lineas.push("Fecha: " + new Date().toLocaleString("es-CO"));

        const texto = lineas.join("\n");

        if (NUMERO_WHATSAPP === "") {
            mostrarMensaje(
                "La encuesta todavía no tiene configurado el número que recibe las respuestas.",
                "error"
            );
            return;
        }

        window.open(
            "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto),
            "_blank",
            "noopener"
        );

        mostrarMensaje(
            "Se abrió WhatsApp con sus respuestas. Pulse Enviar en WhatsApp para terminar. ¡Gracias!",
            "exito"
        );
    });


function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById("mensajeEncuesta");

    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo;
}
