// Imprimir los primeros 10 numeros naturales
// BUCLE WHILE

let inicio = 0; // Index
let condicionParada = 10; // Bandera
let contador = 0; // Cuenta los numeros de giros
let acumulador = 0; // Acumula la variable segun el numero de giros

while (inicio <= condicionParada) {
  console.log(`El numero del giro: ${inicio}`);
  contador = contador + 1; // Ojo - Tenga en cuenta el inicializado de la variable
  acumulador = acumulador + inicio;
  inicio++; // Incremento
}

console.log(`Contador: ${contador} \nAcumulador: ${acumulador}`);

// Fin del bucle while

// Usando el bucle For
