function ejercicio6() {
    let numero = parseInt(document.getElementById("inptEjercicio6numero").value);

    if (numero % 2 == 0 && numero > 0) {
        return window.alert("Es PAR POSITIVO.");
    } else {
        return window.alert("NO es PAR POSITIVO.");
    }
}