let Ejer1Resultado = document.getElementById("Ejer1Resultado");
function Ejer1() {
    let Nivel = parseInt(document.getElementById("Ejer1Nivel").value);
    let Salario = parseInt(document.getElementById("Ejer1Salario").value);
    Resultado = null;

    if (Nivel == 1) {
        Resultado = Salario + ((Salario * 3.5) / 100);
    } else if (Nivel == 2) {
        Resultado = Salario + ((Salario * 4.1) / 100);
    } else if (Nivel == 3) {
        Resultado = Salario + ((Salario * 4.8) / 100);
    } else if (Nivel == 4) {
        Resultado = Salario + ((Salario * 5.3) / 100);
    } else {
        window.alert("El valor no existe.");
    }
    
    return (Ejer1Resultado.innerHTML = `El incremento es: $${Resultado}`);
}