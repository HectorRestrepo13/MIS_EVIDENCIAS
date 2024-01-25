const ciudades = ["Cali", "Medellin", "Bogotá", "New York"];

/*
// Forma clasica usando el for y la longitud del arreglo
for (let index = 0; index < ciudades.length; index++) {
    document.write(`- ${ciudades[index]} <br>`)
}
*/

// Forma moderna usando el foreach
ciudades.forEach((ciudad) => {
  document.write(`- ${ciudad} <br>`);
});
