function ejercicio10() {
    let longitud1 = document.getElementById("inptEjercicio10longitud1").value;
    let longitud2 = document.getElementById("inptEjercicio10longitud2").value;
    let longitud3 = document.getElementById("inptEjercicio10longitud3").value;
    let mayor = longitud1, suma = null, tipoTriangulo = null;
    
    if (longitud2 > mayor) {
        mayor = longitud2;
    }
    if (longitud3 > mayor) {
        mayor = longitud3;
    }
    suma = longitud1 + longitud2 + longitud3 - mayor;
    if (mayor < suma) {
        if (longitud1 == longitud2 && longitud2 == longitud3) {
            tipoTriangulo = "Es un triangulo equilatero";
        } else {
            if (longitud1 == longitud2 || longitud1 == longitud3 || longitud2 == longitud3) {
                tipoTriangulo = "Es un triangulo isosceles";
            } else {
                tipoTriangulo = "Es un triangulo escaleno";
            }
        }
    } else {
        tipoTriangulo = "No es un triangulo";
    }
    
    return window.alert(tipoTriangulo)
}