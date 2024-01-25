let Ejer2Resultado = document.getElementById("Ejer2Resultado");
function Ejer2() {
  let R = parseInt(document.getElementById("Ejer2R").value);
  let T = parseInt(document.getElementById("Ejer2T").value);
  let Q = parseInt(document.getElementById("Ejer2Q").value);
  let R4 = R * 4;
  let T3 = T * 3;
  let Q2 = Q * 2;
  let Operacion = R4 - T3 + 4 * Q2;
  let Resultado = null;

  if (Operacion < 870) {
    Resultado = `El caso es afirmativo y los valores son: <br> R4=${R4}, T3=${T3}, Q2=${Q2}.<br> Resultado: ${Operacion}`;
  } else {
    Resultado = "El caso es negativo.";
  }

  return (Ejer2Resultado.innerHTML = Resultado);
}
