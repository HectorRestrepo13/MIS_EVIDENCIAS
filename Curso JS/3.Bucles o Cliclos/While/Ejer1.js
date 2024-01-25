let Ejer1Resultado = document.getElementById("Ejer1Resultado");

function Ejer1() {
    let X = parseInt(document.getElementById("Ejer1X").value);
    let N = parseInt(document.getElementById("Ejer1N").value);
    let Resultado = X;

    for (let index = 1; index < N; index++) {
        Resultado *= X;
    }

    return (Ejer1Resultado.innerHTML = `Resultado: ${Resultado}`);
}