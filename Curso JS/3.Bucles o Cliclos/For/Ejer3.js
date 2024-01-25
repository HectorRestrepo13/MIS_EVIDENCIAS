let Ejer3Resultado = document.getElementById("Ejer3Resultado");

function Ejer3() {
    Ejer3Resultado.innerHTML = "";
    let numero1 = parseInt(document.getElementById("Ejer3Numero1").value);
    let numero2 = parseInt(document.getElementById("Ejer3Numero2").value);

    for (let index = numero1; index <= numero2; index++) {
        Ejer3Resultado.innerHTML += `${index} <br>`;
    }
}