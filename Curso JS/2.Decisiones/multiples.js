// Decision multiple

let opcionMenu = parseInt(
  prompt("Qué opción quiere del restaurante (Maximo 5):")
);

switch (opcionMenu) {
  case 1:
    document.write("HAMBURGUESA");
    break;
  case 2:
    document.write("SALCHIPAPA");
    break;
  case 3:
    document.write("HOT DOG");
    break;
  case 4:
    document.write("HOT MONDONGO");
    break;
  case 5:
    document.write("AREPA BURGER");
    break;

  default:
    document.write("No tenemos esa opción en el menú");
    break;
}
