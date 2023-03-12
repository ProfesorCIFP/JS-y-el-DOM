document.addEventListener('DOMContentLoaded', iniciar);
var color;
var controlColor = true;


function iniciar() {
    color = document.getElementById('color');
    color.addEventListener('click', invierteColor);
}


function invierteColor() {
    
    if (controlColor) {
        color.style.backgroundColor = 'blue';  
        color.style.color = 'aliceblue'; 
    }
    else {
        color.style.backgroundColor = 'aliceblue';  
        color.style.color = 'blue'; 
    }
    
    controlColor =! controlColor; 
}
