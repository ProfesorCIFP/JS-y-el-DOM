
function inicializar() {
    const selectElement = document.querySelector('.helado');

    selectElement.addEventListener('change', function(event) {
        const resultado = document.querySelector('.resultado');
        resultado.textContent = 'Te gusta el sabor: '+ event.target.value;
    });
}

document.addEventListener('DOMContentLoaded', inicializar);