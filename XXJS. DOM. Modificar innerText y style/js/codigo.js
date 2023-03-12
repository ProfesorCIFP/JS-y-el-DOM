
function display() {
    var elemento = document.getElementById("hide-me")

    // Resetear, por si acaso has estado jugando con la otra propiedad
    elemento.style.visibility = 'visible';
    
    if (elemento.style.display == 'none')
        elemento.style.display = 'block';
    else 
        elemento.style.display = 'none';

    elemento.textContent = "Hola. Tengo mi DISPLAY=BLOCK";
}

function visibility() {
    var elemento = document.getElementById("hide-me")

    // Mostramos, por si acaso has estado jugando con la otra propiedad
    elemento.style.display = 'block'; 

    if (elemento.style.visibility == 'hidden')
        elemento.style.visibility = 'visible';
    else 
        elemento.style.visibility = 'hidden';

    elemento.textContent = "Hola. Tengo mi VISIBILITY=VISIBLE";
}