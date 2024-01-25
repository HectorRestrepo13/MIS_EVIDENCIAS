const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];
ciudades.forEach((ciudad) => {
    document.write(`- ${ciudad} <br>`);
  });

  document.write(`<br>--------------------<br><br>`);
// Insertando en posición especifica
ciudades.splice(2, 1, "Buga", "Obando");

// Forma moderna usando el foreach
ciudades.forEach((ciudad) => {
  document.write(`- ${ciudad} <br>`);
});