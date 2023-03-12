// FORMA 1: 
window.onload = inicializar;     // Más antiguo


// FORMA 2:
// window.addEventListener("load", inicializar);   // Más actual
            
function inicializar() {
    document.getElementById('parrafo1').style.color = 'red';
    document.getElementById('parrafo2').style.color = 'blue';
}

// Usando una función anónima
/* window.addEventListener("load", function(event) {
//     console.log("He terminado de cargar la página");
//     alert("He terminado de cargar la página!!!");
    document.getElementById('parrafo1').style.color = 'red';
    document.getElementById('parrafo2').style.color = 'blue';
}) */