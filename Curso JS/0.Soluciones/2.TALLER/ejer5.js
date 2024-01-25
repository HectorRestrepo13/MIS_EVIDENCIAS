function ejercicio5() {
    let horas = parseInt(document.getElementById("inptEjercicio5horas").value);
    let minutos = parseInt(document.getElementById("inptEjercicio5minutos").value);
    let precioHoras = 1500;
    let precioMinutos = 1500 / 60;

    let total = (horas * precioHoras) + (minutos * precioMinutos);

    return window.alert(`El total a pagar es: $${total}`);
}