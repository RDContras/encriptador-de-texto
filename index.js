let textoEncriptado = false;

function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (!textoEncriptado) {
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        if (texto.length !== 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "./img/encriptar.png";
            textoEncriptado = true;
        } else {
            muñeco.src = "./img/muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("¡Error!", "Por favor ingresa un texto", "warning");
        }
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto                 
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o")
        .replace(/ai/gi, "a")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptar.jpg";
        textoEncriptado = false;
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Error!", "Por favor ingresa un texto", "warning");
    }
}
