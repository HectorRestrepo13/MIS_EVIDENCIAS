const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

// Capturamos el elemento html para manipularlo, recordar que es un elemento padre
let miSelect = document.getElementById("miSelect");

ciudades.forEach((ciudad) => {
    // Creamos los elementos hijos del select
    let opcion = `<option value="${ciudad}">${ciudad}</option>`;
    // Llenamos el select con los hijos creados... recuerde el operador de incremento
    miSelect.innerHTML += opcion;
});