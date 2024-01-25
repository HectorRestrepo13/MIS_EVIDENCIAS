let CategoriaA = document.getElementById("Ejer3CatA");
let CategoriaB = document.getElementById("Ejer3CatB");
let CategoriaC = document.getElementById("Ejer3CatC");
let Ejer3Resultado = document.getElementById("Ejer3Resultado");

function Ejer3() {
    let NVentas = parseInt(document.getElementById("Ejer3VentasDia").value);
    let Ventas=0,contadorA=0, contadorB=0,contadorC=0,resultado=0;

    for (let index = 0; index < NVentas; index++) {
        Ventas = parseInt(prompt(`Ingresa venta de día ${index + 1}`));
        if (Ventas > 1000) {
            contadorA++;
        } else if (Ventas > 500 && Ventas <= 1000) {
            contadorB++;
        } else if (Ventas <= 500) {
            contadorC++;
        }
        resultado += Ventas;
    }

    return (CategoriaA.innerHTML = contadorA, CategoriaB.innerHTML = contadorB, CategoriaC.innerHTML = contadorC, Ejer3Resultado.innerHTML = `$${resultado}`);
}