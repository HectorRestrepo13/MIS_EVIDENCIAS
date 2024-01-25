function ejercicio2() {
    let calificacionNumerica = document.getElementById("inptEjercicio2calificacionNumerica").value;
    let calificacionLetra = null;

    if (calificacionNumerica >= 90) {
        calificacionLetra = "A"
    } else if (calificacionNumerica < 90 & calificacionNumerica >= 80) {
        calificacionLetra = "B"
    } else if (calificacionNumerica < 80 & calificacionNumerica >= 70) {
        calificacionLetra = "C"
    } else if (calificacionNumerica < 70 & calificacionNumerica >= 69) {
        calificacionLetra = "D"
    } else if (calificacionNumerica < 69) {
        calificacionLetra = "E"
    }

    return window.alert(`La calificación del estudiante es: ${calificacionLetra}`);
}