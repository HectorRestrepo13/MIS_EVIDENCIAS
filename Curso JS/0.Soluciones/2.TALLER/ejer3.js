function ejercicio3() {
    let horasTrabajadas = parseInt(document.getElementById("inptEjercicio3horasTrabajadas").value);
    let valorPorHora = parseInt(document.getElementById("inptEjercicio3valorPorHora").value);

    let salario = valorPorHora * horasTrabajadas;

    return window.alert(`El salario es: ${salario}`);
}