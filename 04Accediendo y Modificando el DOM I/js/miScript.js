function mostrarNombre() {
    var nombre = document.getElementById("nombre").value;
    var saludo = "Hola, " + nombre.toUpperCase();

    document.getElementById("resultado").innerHTML = saludo;
}
