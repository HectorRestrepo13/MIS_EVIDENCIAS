// Unir arreglos o concatenar

let pares = [2, 4, 6];
let impares = [1, 3, 5, 7];
let impares2 = [9, 11, 13];

// Operador spread -- 2015
let enteros = [...pares, ...impares, ...impares2];

console.log(enteros);

// Operador concat -- 90s
let enteros2 = pares.concat(impares, impares2);

console.log(enteros2);