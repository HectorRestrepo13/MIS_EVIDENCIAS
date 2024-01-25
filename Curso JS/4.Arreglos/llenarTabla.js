const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

// Manipulamos el elemento del html - DOM
let miTabla = document.getElementById("miTabla");

ciudades.forEach((ciudad) => {
    // Creamos una fila con una columna para agregar a la tabla
    let fila = `<tr>
                    <td>${ciudad}</td>
                </tr>`;
    
    // Llenamos la tabla
    miTabla.innerHTML += fila;
});