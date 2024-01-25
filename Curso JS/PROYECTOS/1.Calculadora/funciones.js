// Funciones matematicas para la calculadora

//D.O.M.  Capturamos los elementos HTML para manipular en JS

let resultado = document.getElementById("resultado");






// Funciones matematicas de la calculadora

// Escribir 7 en el input

function escribir0() {
    return (resultado.value += 0)
}

function escribir1() {
    return (resultado.value += 1)
}

function escribir2() {
    return (resultado.value += 2)
}

function escribir3() {
    return (resultado.value += 3)
}

function escribir4() {
    return (resultado.value += 4)
}

function escribir5() {
    return (resultado.value += 5)
}

function escribir6() {
    return (resultado.value += 6)
}

function escribir7() {
    return (resultado.value += 7)
}

function escribir8() {
    return (resultado.value += 8)
}

function escribir9() {
    return (resultado.value += 9)
}

function punto() {
    return (resultado.value += '.')
}

function sumar() {
    return (resultado.value += '+')
}

function restar() {
    return (resultado.value += '-')
}

function multiplicar() {
    return (resultado.value += '*')
}

function dividir() {
    return (resultado.value += '/')
}

function porcentaje() {
    let porcentaje = eval(resultado.value) / 100;
    return (resultado.value = porcentaje)
}

function fraccion() {
    let fraccion = 1 / eval(resultado.value);
    return (resultado.value = fraccion)
}

function positivonegativo() {
    let positivonegativo = resultado.value * (-1);
    return (resultado.value = positivonegativo)
}

function raiz() {
    let raiz = Math.sqrt(resultado.value, 2);
    return (resultado.value = raiz)
}

function exponente() {
    let exponente = Math.pow(resultado.value, 2);
    return (resultado.value = exponente)
}

function borrar() {
    return (resultado.value = "")
}

function igual() {
    // La funcion "eval" evalua el resultado de una expresión matematica
    let total = eval(resultado.value)
    return (resultado.value = total)
}