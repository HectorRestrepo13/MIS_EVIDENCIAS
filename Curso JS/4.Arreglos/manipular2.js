const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

// Agregando
ciudades.unshift("Boston", "Los Angeles");  // Agrega al inicio del arrelgo
ciudades.push("Zaragoza", "Madrid");  // Agrega al final del arreglo

// Forma moderna usando el foreach
ciudades.forEach((ciudad) => {
  document.write(`- ${ciudad} <br>`);
});