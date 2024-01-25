function ejercicio8() {
    let kilometros = parseInt(document.getElementById("inptEjercicio8kilometros").value)
    let monto = null, montoAdicional = null, montoIVA = null;

    if (kilometros <= 300) {
        monto = 300000;
    }
    else if (kilometros > 300 && kilometros <= 1000) {
        montoAdicional = 15000 * (kilometros - 300);
        monto = 300000 + montoAdicional;
    }
    else if (kilometros > 1000) {
        montoAdicional = 10000 * (kilometros - 1000);
        monto = 300000 + montoAdicional;
    }
    montoIVA = monto + ((monto / 100) * 20);

    return window.alert(`Monto a Pagar:  $${monto}\nMonto +IVA:  $${montoIVA}`);
}