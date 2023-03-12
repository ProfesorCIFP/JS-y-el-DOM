document.addEventListener('DOMContentLoaded', iniciar);
var color;
var controlColor = true;
var colores = ["#2E86C1", "#1ABC9C", "#D68910", "#839192", "#CB4335"];

var fondoFotos;


function iniciar() {
    color = document.getElementById('color');
    color.addEventListener('click', asignaColor);
    
    fondoFotos = document.getElementsByClassName("photo");
}


function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function asignaColor() {
    
    var colorAleatorio = numeroAleatorio(0, colores.length-1);
    console.log(colorAleatorio);
    color.style.backgroundColor = colores[colorAleatorio];    
    color.innerHTML = "Color de Fondo: " + colores[colorAleatorio]; 
    
    modificaFondoFoto(colores[colorAleatorio]);
}

function modificaFondoFoto(color) {
    
    for (i = 0; i < fondoFotos.length; i++) {
        fondoFotos[i].style.backgroundColor = color;
    }
}
