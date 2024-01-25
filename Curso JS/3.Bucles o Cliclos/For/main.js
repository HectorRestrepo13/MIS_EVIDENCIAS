let Ejer1Resultado = document.getElementById("Ejer1Resultado");

function Ejer1() {
    Ejer1Resultado.innerHTML = "";
  let Numero = parseInt(document.getElementById("Ejer1Numero").value);

  for (let index = 0; index < Numero; index++) {
    Ejer1Resultado.innerHTML += `*`;
  }
}
