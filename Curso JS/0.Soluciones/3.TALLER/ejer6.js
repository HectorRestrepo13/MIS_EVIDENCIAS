function ejercicio6() {
    let materias = document.getElementById("inptEjercicio6materias").value;
    let costoInscripcion = materias * 2500;

    if (costoInscripcion > 15000) {
        costoInscripcion = 15000;
    }

    return window.alert(`El total a pagar es:  $${costoInscripcion}Bs`);
}