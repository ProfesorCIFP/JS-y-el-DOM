document.addEventListener('DOMContentLoaded', iniciar);
var color;
var controlColor = true;
var colores = ["#2E86C1", "#1ABC9C", "#D68910", "#839192", "#CB4335"];

var fondoFotos;
var historicoColores;


function iniciar() {
    color = document.getElementById('color');
    color.addEventListener('click', asignaColor);
    
    fondoFotos = document.getElementsByClassName("photo");
    for (i = 0; i < fondoFotos.length; i++)
        fondoFotos[i].addEventListener('click', function(e) {
            ocultaFoto(e);
        });
    
    historicoColores = document.getElementById('historicoColores');
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
    modificaHistoricoColores(colores[colorAleatorio]);
}

function modificaHistoricoColores(color) {
    var elementoP = document.createElement("p");
    elementoP.innerHTML = color;
    
    historicoColores.appendChild(elementoP);
}

function modificaFondoFoto(color) {
    
    for (i = 0; i < fondoFotos.length; i++) {
        fondoFotos[i].style.backgroundColor = color;
    }
}

function ocultaFoto(e) {
 //   alert("Foto pulsada");
    console.log(e.target);
    if (e.target.style.opacity == '0')
        e.target.style.opacity = '1'
    else
        e.target.style.opacity = '0'
        
}

