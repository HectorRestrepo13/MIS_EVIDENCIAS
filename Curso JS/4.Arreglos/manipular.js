const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

ciudades.pop();  // Elimina el ultimo elemento de la lista o arreglo
ciudades.shift();  // Elimina el primer elemento de la lista o arreglo

// Forma moderna usando el foreach
ciudades.forEach((ciudad) => {
  document.write(`- ${ciudad} <br>`);
});