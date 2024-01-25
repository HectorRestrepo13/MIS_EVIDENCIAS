let Ejer3Resultado = document.getElementById("Ejer3Resultado");
function Ejer3() {
  let T = parseInt(document.getElementById("Ejer3T").value);
  let P = parseInt(document.getElementById("Ejer3P").value);
  let N = parseInt(document.getElementById("Ejer3N").value);
  let Operacion1 = Math.pow(T / P, N);
  let Operacion2 = Math.pow(T, N) / Math.pow(P, N);
  let Resultado = null;

  if (Operacion1 == Operacion2) {
    Resultado = `Operacion 1 = ${Operacion1} y Operacion 2 = ${Operacion2}. <br>Sí es igual.`;
  } else {
    Resultado = `Operacion 1 = ${Operacion1} y Operacion 2 = ${Operacion2}. <br>No es igual.`;
  }

  return (Ejer3Resultado.innerHTML = Resultado);
}
