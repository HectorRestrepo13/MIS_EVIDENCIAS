let resultado = document.getElementById("resultado");

function calcular() {
  let peso = parseInt(document.getElementById("peso").value);
  let estatura = parseFloat(document.getElementById("estatura").value);

  let idm = peso / Math.pow(estatura, 2);
  let total = null;

  if (idm < 18.5) {
    total = `Su peso es: ${idm} <br><b>Peso Insuficiente.</b><br><img src="flaco.png" alt="flaco.png">`;
  } else if ((idm >= 18.5) & (idm <= 24.9999)) {
    total = `Su peso es: ${idm} <br><b>Peso Normal.</b><br><img src="normal.png" alt="normal.png">`;
  } else if ((idm >= 25) & (idm <= 29.9)) {
    total = `Su peso es: ${idm} <br><b>Sobrepeso.</b><br><img src="sobrepeso.png" alt="sobrepeso.png">`;
  } else if ((idm >= 30) & (idm <= 39.9)) {
    total = `Su peso es: ${idm} <br><b>Obesidad.</b><br><img src="sobrepesoextramo.png" alt="sobrepesoextramo.png">`;
  } else if ((idm >= 40) & (idm <= 49.9)) {
    total = `Su peso es: ${idm} <br><b>Obesidad Morbida.</b><br><img src="sobrepesoextramo.png" alt="sobrepesoextramo.png">`;
  } else if (idm > 50) {
    total = `Su peso es: ${idm} <br><b>Obesidad Extrema.</b><br><img src="sobrepesoextramo.png" alt="sobrepesoextramo.png">`;
  }
  return (resultado.innerHTML = total);
}
