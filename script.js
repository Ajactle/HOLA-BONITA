// 1. El "cerebro" del bot con la info de tus fotos
const baseDeDatosSkincare = {
    "hola": "¡Hola, Bonita! ✨ ¿En qué puedo ayudarte con tu rutina de skincare hoy?",
    "envio": "Hacemos envíos a todo México. Estamos en Los Reyes, Veracruz. 🚚",
    "precio": "Tenemos productos desde $3.20 (Ácido Hialurónico) hasta sets completos. ¿Buscas algo específico?",
    "ordinary": "Somos expertos en The Ordinary. Tenemos el Nightly Set, Daily Set y más. 🧴",
    "limpiador": "El Glucoside Foaming Cleanser cuesta $5.60 y es súper suave con la piel.",
    "gracias": "¡De nada! Recuerda que tu piel se merece lo mejor. ✨",
    "contacto": "Escríbenos a SKINCARE@GMAIL.COM o llámanos al 2721201331."
};

// 2. La función que hace la magia
function enviarPregunta() {
    let input = document.querySelector('input[type="text"]') || document.getElementById('pregunta'); 
    let texto = input.value.toLowerCase().trim();
    let respuestasDiv = document.getElementById('respuestas'); // Asegúrate que tu div de chat tenga este ID

    if (texto === "") return;

    // Mostrar lo que escribió el usuario
    respuestasDiv.innerHTML += `<div style="text-align:right; margin: 10px; color: #d48e9d;"><b>Tú:</b> ${input.value}</div>`;

    // Buscar respuesta en nuestra base de datos local
    let respuestaBot = "Lo siento, Bonita. No entendí eso, pero puedes preguntarme por envíos, precios o productos de The Ordinary. ✨";
    
    for (let clave in baseDeDatosSkincare) {
        if (texto.includes(clave)) {
            respuestaBot = baseDeDatosSkincare[clave];
            break;
        }
    }

    // Mostrar respuesta de Nova
    setTimeout(() => {
        respuestasDiv.innerHTML += `<div style="text-align:left; margin: 10px; color: #555;"><b>Nova:</b> ${respuestaBot}</div>`;
        respuestasDiv.scrollTop = respuestasDiv.scrollHeight; // Auto-scroll hacia abajo
    }, 400); // Pequeño retraso para que parezca que piensa

    input.value = ""; // Limpiar el cuadro
}
