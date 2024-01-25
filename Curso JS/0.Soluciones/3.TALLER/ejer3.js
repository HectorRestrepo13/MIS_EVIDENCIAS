function ejercicio3() {
  let numero1 = document.getElementById("inptEjercicio3numero1").value;
  let numero2 = document.getElementById("inptEjercicio3numero2").value;
  let operacion = document.getElementById("inptEjercicio3operacion").value;
  let resultado = null;

  switch (operacion) {
    case 1:
      resultado = numero1 + numero2;
      break;
    case 2:
      resultado = numero1 * numero2;
      break;
    case 3:
      resultado = numero1 / numero2;
      break;

    default:
      window.alert("Esa operación no existe.");
      break;
  }

  return window.alert(`El resultado de la operación es: ${resultado}`);
}