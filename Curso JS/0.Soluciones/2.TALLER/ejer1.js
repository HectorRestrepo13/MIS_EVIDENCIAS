function ejercicio1() {
    let radio = parseInt(document.getElementById("inptEjercicio1").value);
    let diametro = 2 * radio;
    let longitud = Math.round(2 * Math.PI * radio);
    let area = Math.round(Math.PI * Math.pow(radio, 2));

    return window.alert(`El diametro del circulo es: ${diametro} \nLa longitud es: ${longitud} \nEl area es: ${area}`)
}
