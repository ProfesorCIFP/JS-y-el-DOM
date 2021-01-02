/*
// Tomamos un elemento
    var cabecera = document.getElementById('cabecera');

    // elimina una clase del elemento
    cabecera.classList.remove('foo');

// Añade una clase si no existe
    cabecera.classList.add('otra');

// añade o elimina varias clases a la vez
    cabecera.classList.add('foo', 'bar');
    cabecera.classList.remove('foo', 'bar');

// Si la clase existe la elimina, si no existe, la crea
    cabecera.classList.toggle('visible');

// Devuelve true si el elemento contiene esa clase
    cabecera.classList.contains('foo');
*/


// TO-DO: 
//   - Al pulsar el boton dos veces que ponga el color y lo quite.
function ponerColor (color) {
    var caja = document.getElementById("caja");

    caja.classList.remove('red', 'green', 'blue');
    caja.classList.add(color);
}


/*
function ponerColor (color) {
    var caja = document.getElementById("caja");

    if (caja.classList.contains(color)) {
        caja.classList.remove(color);
    }
    else {
        caja.classList.remove('red', 'green', 'blue');
        caja.classList.add(color);
    }
}
*/