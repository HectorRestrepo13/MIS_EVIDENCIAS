function ejercicio4() {
    let baseMayor = parseInt(document.getElementById("inptEjercicio4baseMayor").value);
    let baseMenor = parseInt(document.getElementById("inptEjercicio4baseMenor").value);
    let altura = parseInt(document.getElementById("inptEjercicio4altura").value);

    let area = ((baseMayor + baseMenor)/2) * altura;

    return window.alert(`El area del trapecio es: ${area}`);
}