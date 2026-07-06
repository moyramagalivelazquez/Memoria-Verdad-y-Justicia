const btngenerar = document.getElementById('btn-generar');
const inputMsg = document.getElementById('mensaje-tarjeta');
const resultado = document.getElementById('tarjeta-resultado');

btngenerar.addEventListener('click', () => {
    const mensaje = inputMsg.value.trim();

    if (!mensaje) {
        resultado.textContent = 'Por favor, ingresa un mensaje para generar la tarjeta.';
        return;
    }

    resultado.innerHTML = `
        <div class="tarjeta-memoria">
            <p class="tarjeta-fecha">24 de marzo - 1976/2026</p>
            <p class="tarjeta-mensaje">${mensaje}</p>
            <p class="tarjeta-firma">🕊️ Memoria, Verdad y Justicia</p>
        </div>`;
});
const formulario = document.getElementById("form-adhesion");
const nombre = document.getElementById("nombre-adhesion");
const mensaje = document.getElementById("msg-adhesion");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nombre.value.trim() === ""){
        mensaje.innerHTML = "⚠️ Debes ingresar tu nombre.";
        mensaje.style.color = "yellow";
        return;
    }

    mensaje.innerHTML = `✅ Gracias <strong>${nombre.value}</strong>, tu adhesión fue registrada.`;
    mensaje.style.color = "lightgreen";

    formulario.reset();

});
const cronometro = document.getElementById("cronometro");

function actualizarCronometro(){

    const hoy = new Date();

    let proximo24 = new Date(hoy.getFullYear(),2,24);

    if(hoy > proximo24){
        proximo24 = new Date(hoy.getFullYear()+1,2,24);
    }

    const diferencia = proximo24 - hoy;

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));

    cronometro.innerHTML =
    `Faltan ${dias} días, ${horas} horas y ${minutos} minutos para el próximo 24 de marzo.`;

}

actualizarCronometro();

setInterval(actualizarCronometro,60000);