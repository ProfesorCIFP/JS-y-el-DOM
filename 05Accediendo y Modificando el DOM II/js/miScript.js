function ponerColor() {
    // Usando los nombre de las etiquetas HTML
    var arrayParrafos = document.getElementsByTagName("p");

    // Usando los nombres de las clases
    // var arrayParrafos = document.getElementsByClassName("parrafos");
   
    // Usando los selectores de CSS
    // var arrayParrafos = document.querySelectorAll("p");  

    for (var i = 0; i < arrayParrafos.length; i++) {
        arrayParrafos[i].innerHTML = "Hola";
        arrayParrafos[i].style.color = 'red';
    }
}

document.addEventListener("DOMContentLoaded", ponerColor);

/*
// Para llamar a una función que tenga parámetros

function ponerColor(nuevoColor) {
    var arrayParrafos = document.getElementsByClassName("parrafos");

    // Para controlar que todo va bien
    // console.log ("Longitud del array: " + arrayParrafos.length);
    // console.log ("Color: " + nuevoColor);
    for (var i = 0; i < arrayParrafos.length; i++) {
        arrayParrafos[i].innerHTML = "Hola " + nuevoColor;
        arrayParrafos[i].style.color = nuevoColor;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    ponerColor('blue');
});
*/