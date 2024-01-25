function ejercicio1() {
    let grados = document.getElementById("inptEjercicio1grados").value;
    let angulo = null;

    if (grados < 90) {
        angulo = "agudo.";
    } else if (grados > 90) {
        angulo = "obtuso.";
    } else if (grados == 90) {
        angulo = "recto.";
    }

    return window.alert(`El angulo es: ${angulo}`);
}