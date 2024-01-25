// Uso de .map para recorrer arreglos
// Diferencia entre forEach y map

let pares = [2, 4, 6, 8 ,10];   // Definición literal

let nuevoArreglo2 = pares.forEach((par) => {
    return console.log(par * 10);
});

let nuevoArreglo = pares.map((par, index, original) => {
    // return par * 10;
    return `${index} --> ${par * 3} el original ${original}`
});

/* 
    - La diferencia es: map y forEach recorren el arreglo, pero con map puedo conservar el arreglo original
    - forEach retorna un valor y map retorna un arreglo
 */

console.log(pares);
console.log(nuevoArreglo2);  // Sale undefined pues no puede crear el nuevo arreglo
console.log(nuevoArreglo);