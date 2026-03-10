// Diccionario de conocimiento basado en tus imágenes
const baseDeConocimiento = {
    "envio": "Realizamos envíos a todo México. Si estás en Los Reyes, Veracruz, el tiempo de entrega es más rápido. ¿Te gustaría saber el costo para otra ciudad?",
    "contacto": "Puedes contactarnos al teléfono 2721201331 o escribirnos a SKINCARE@GMAIL.COM. Estamos en Los Reyes, Veracruz.",
    "limpiador": "Tenemos el 'Glucoside Foaming Cleanser' por $5.60. Es ideal para una limpieza profunda pero suave. ✨",
    "niacinamida": "¡Claro! La Niacinamide 10% + Zinc 1% está en oferta a $5.70. Ayuda con las imperfecciones y el brillo.",
    "hialuronico": "El Hyaluronic Acid 2% + B5 cuesta $3.20. Es perfecto para hidratar tu piel a profundidad.",
    "ordinary": "Somos especialistas en The Ordinary. Tenemos sets como 'The Nightly Set', 'El Conjunto Diario' ($5.70) y 'El Conjunto Brillante' ($5.60).",
    "ofertas": "¡Sí! Actualmente tenemos el Set de Ácido Glicólico con 13% de descuento a solo $4.60.",
    "rutina": "Para una rutina básica te recomiendo: 1. Limpiador (Glucoside), 2. Hidratación (Ácido Hialurónico) y 3. Sellado (Natural Moisturizing Factors).",
    "hola": "¡Hola, Bonita! ✨ ¿En qué puedo ayudarte hoy con tu rutina de skincare?",
    "gracias": "¡De nada! Recuerda que tu piel se merece lo mejor. ¿Deseas consultar algo más?"
};

// Función para procesar la respuesta
function responderChatbot(pregunta) {
    const p = pregunta.toLowerCase();
    let respuesta = "Lo siento, todavía estoy aprendiendo. 🌸 Pero puedes contactarnos al 2721201331 para una atención personalizada.";

    // Buscar palabras clave en la pregunta
    for (let clave in baseDeConocimiento) {
        if (p.includes(clave)) {
            respuesta = baseDeConocimiento[clave];
            break;
        }
    }
    
    return respuesta;
}

// Lógica para conectar con tu HTML (suponiendo que tu botón es 'Enviar' y el input es 'pregunta')
document.querySelector(".boton-enviar").addEventListener("click", () => {
    const input = document.querySelector(".input-chat");
    const textoUsuario = input.value;
    
    if(textoUsuario !== "") {
        const respuestaIA = responderChatbot(textoUsuario);
        mostrarEnPantalla(respuestaIA); // Aquí llamas a la función que dibuja el mensaje
        input.value = "";
    }
});