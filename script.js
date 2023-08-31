const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function validarNumero () {

    var cajatexto = document.getElementById("ingresaNumero");
    var numeroIngresado = cajatexto.value;
    var parrafoMensaje = document.getElementById("mensaje");

    if (numeroIngresado > numeroAleatorio){
        parrafoMensaje.innerText = "Muy Alto, Intenta de Nuevo.";
    }else if (numeroIngresado < numeroAleatorio) {
        parrafoMensaje.innerText = "Muy Bajo, Intenta de Nuevo";
    }else {
        parrafoMensaje.innerText = "¡FELICIDADES! GANASTE EL JUEGO EN " + intentos + " INTENTOS";
    }
    intentos++;
    
}
