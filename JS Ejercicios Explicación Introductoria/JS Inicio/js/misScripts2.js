var color = document.getElementById('color');
var controlColor = true;


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
