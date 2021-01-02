function esNumero(numero) {
    if (numero == "") 
        return false;

    numero = Number(numero);
    if (isNaN(numero)) 
        return false;

    return true;
}

function operar(operacion) {
    var operando1 = document.getElementById('operando1').value;
    var operando2 = document.getElementById('operando2').value;
    var resultado = document.getElementById('resultado');
    
    if (esNumero(operando1) && esNumero(operando2)) {
        switch (operacion) {
            case '+' : resultado.value = Number(operando1) + Number(operando2);
            break;
            case '-' : resultado.value = Number(operando1) - Number(operando2);
            break;
            case '*' : resultado.value = Number(operando1) * Number(operando2);
            break;
            case '/' : resultado.value = Number(operando1) / Number(operando2);
            break;
        } 
        resultado.style.color = 'black';
        resultado.style.backgroundColor = 'white';
    } else {
        resultado.value = "ERROR!!!";
        resultado.style.color = 'white';
        resultado.style.backgroundColor = 'red';
    }
}
