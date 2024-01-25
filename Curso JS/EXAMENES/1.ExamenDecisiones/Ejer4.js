let Ejer4Resultado = document.getElementById("Ejer4Resultado");
function Ejer4() {
  let Y = parseInt(document.getElementById("Ejer4Y").value);
  let Operacion = null;

  if ((Y >= 0) & (Y <= 10)) {
    Operacion = 4 / Y - Y;
  } else if ((Y > 11) & (Y <= 25)) {
    Operacion = Math.pow(Y, 3) - 12;
  } else if ((Y > 25) & (Y <= 50)) {
    Operacion = Math.pow(Y, 2) + (Math.pow(Y, 3) - 18);
  } else {
    Operacion = 0;
  }

  return (Ejer4Resultado.innerHTML = `X=${Operacion} <br>Y=${Y}`);
}
