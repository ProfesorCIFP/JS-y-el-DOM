// Creando nuevos elementos en el DOM

function poniendoParrafos() {
    var parrafos = document.getElementById("parrafos");

    for (var i = 1; i <= 5; i++) {
        var nuevoParrafo = document.createElement("p");
        var textoParrafo = document.createTextNode(i + " - Soy un nuevo párrafo .....");

        nuevoParrafo.appendChild(textoParrafo);

        parrafos.appendChild(nuevoParrafo);
    }
}

function poniendoParrafos2() {
    var parrafos = document.getElementById("parrafos");

    for (var i = 1; i <= 5; i++) {
        var nuevoParrafo = document.createElement("p");
        // Introduce texto plano
        nuevoParrafo.innerText = i + " <strong> - Soy un nuevo párrafo .....</strong>";

        // Introduce contenido en formato HTML
        // nuevoParrafo.innerHTML = i + "<strong> - Soy un nuevo párrafo .....</strong>";

        parrafos.appendChild(nuevoParrafo);
    }
}

document.addEventListener("DOMContentLoaded", poniendoParrafos);