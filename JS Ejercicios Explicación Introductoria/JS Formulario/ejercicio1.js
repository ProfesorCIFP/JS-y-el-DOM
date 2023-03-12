function inicializarDia() {
    var diaNacimiento = document.getElementById("diaNacimiento");

    //diaNacimiento.innerHTML = '<option value="3">3</option>';
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i
        diaNacimiento.appendChild(option);
    }
}

function inicializarMes() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var mesNacimiento = document.getElementById("mesNacimiento");

    for (var i = 0; i < meses.length; i++) {
        var option = document.createElement('option');
        option.text = meses[i];
        option.value = meses[i];
        mesNacimiento.appendChild(option);
    }
}

function inicializarAno() {
    var anoNacimiento = document.getElementById("anoNacimiento");

    for (var i = 1900; i < 2018; i++) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i;
        anoNacimiento.appendChild(option);
    }
}

function anadirEventosInput() {
    var todosLosInput = document.getElementsByTagName('input');
    
    /* El elemento recibe el foco */
    for (var i = 0; i < todosLosInput.length; i++) {
        todosLosInput.item(i).addEventListener('focus', function() {
            this.style.backgroundColor = 'pink';
        })
        
        /* El elemento pierde el foco */
        todosLosInput.item(i).addEventListener('blur', function() {
            this.style.backgroundColor = '';
        })
    }
}

function inicializarFormulario() {
    inicializarDia();
    inicializarMes();
    inicializarAno();
    anadirEventosInput();
}

// El evento "DOMContentLoaded" se dispara cuando el DOM ya se halla creado, no espera a la carga completa de la página.
document.addEventListener("DOMContentLoaded", inicializarFormulario);