function ejercicio7() {
    let productoNombre = document.getElementById("inptEjercicio7productoNombre").value;
    let productoPrecio = parseInt(document.getElementById("inptEjercicio7productoPrecio").value);
    let cantidadDocena = parseInt(document.getElementById("inptEjercicio7cantidadDocena").value);
    let descuento = null, montoAPagar = null, obsquio = null;
    productoNombre = productoNombre.toUpperCase();
    let monto = productoPrecio * (12 * cantidadDocena);

    if (cantidadDocena > 3) {
        descuento = (monto / 100) * 15;
        montoAPagar = monto - descuento;
        obsquio = cantidadDocena - 3;
    } else {
        descuento = (monto / 100) * 10;
        montoAPagar = monto - descuento;
        obsquio = 0;
    }

    return window.alert(`COMPRA DE ${productoNombre}\nMonto de la compra:  $${monto}\nEl descuento es:  $${descuento}\nEl monto a pagar es:  $${montoAPagar}\nUnidades obsequiadas:  ${obsquio}`);
}