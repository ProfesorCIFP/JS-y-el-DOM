function inicializar() {
    document.getElementById('parrafo1').style.color = 'red';
    document.getElementById('parrafo2').style.color = 'blue';
}

function inicializarFecha() {
    var fechaHoy = new Date();
    var dia = fechaHoy.getDate();  // Obtenemos el día de la fecha actual.
    var mes = fechaHoy.getMonth();  // Obtenemos el mes de la fecha actual.
    var agno = fechaHoy.getFullYear();  // Obtenemos el año de la fecha actual.

    document.getElementById('dia').value = dia;
    document.getElementById('mes').value = mes + 1;
    document.getElementById('ano').value = agno;
}
// El evento "load" se dispara cuando la página 
//  se ha terminado de cargar completamente (imágenes, scripts, etc.)
window.addEventListener("load", inicializar);

// El evento "DOMContentLoaded" se dispara cuando el DOM ya se halla creado, 
//  no espera a la carga completa de la página.
document.addEventListener("DOMContentLoaded", inicializarFecha);     