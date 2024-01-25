let Ejer2Resultado = document.getElementById("Ejer2Resultado");
function Ejer2() {
    let bandera = 0;
    let contador = 0;
    let acomulador = 0;
    let resultado = 0;
    while (bandera != 999) {
        bandera = parseInt(prompt("Escribe el valor:"));
        acomulador += bandera;
        contador++;
    }
    resultado = acomulador / contador;
    
    return (Ejer2Resultado.innerHTML = `El promedio es: ${resultado}`);
}