function ejercicio2() {
  let numero1 = parseInt(document.getElementById("inptEjercicio2Valor1").value);
  let numero2 = parseInt(document.getElementById("inptEjercicio2Valor2").value);
  let operacion = document.getElementById("operaciones").value;
  let resultado = null;

  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      break;
    case "resta":
      resultado = numero1 - numero2;
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      break;
    case "division":
      resultado = numero1 / numero2;
      break;
    case "modulo":
      resultado = numero1 % numero2;
      break;
  }
  return window.alert(`El resultado es: ${resultado}`);
} 
