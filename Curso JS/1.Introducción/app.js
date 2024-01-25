// ENTRADAS
// PARSEAR O CAMBIAR DE TIPO DE DATO "parseInt(): parsea a entero"
let numero1 = parseInt(prompt("Escribe el primer numero:"));
let numero2 = parseInt(prompt("Escribe el segundo numero:"));

// PROCESO
let suma = numero1 + numero2;

// SALIDA
document.write("La suma es: " + suma);

// Usando LITERAL EXPRESSIONS o BACKSTICKS
document.write(`La suma es: ${suma}... <br> <hr>Está es la siguiente linea!!<hr>`);