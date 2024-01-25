function ejercicio5() {
    let numeroCuenta = document.getElementById("inptEjercicio5numeroCuenta").value;
    let montoAhorrado = document.getElementById("inptEjercicio5montoAhorrado").value;
    let montoGanado = null;
    let nuevoMonto = null;

    if (montoAhorrado > 5000000) {
        montoGanado = (montoAhorrado / 100) * 2.5;
    } else if (montoAhorrado > 1000000 & montoAhorrado <= 5000000) {
        montoGanado = (montoAhorrado / 100) * 2;
    } else {
        montoGanado = (montoAhorrado / 100) * 1.5;
    }
    nuevoMonto = montoAhorrado + montoGanado;

    return window.alert(`El número de cuenta: #${numeroCuenta}\nEl monto ahorrado:  $${montoAhorrado} COP\nEl monto de lo ganado en interese en el mes:  $${montoGanado} COP\nEl nuevo monto ahorrado:  $${nuevoMonto} COP`);
}