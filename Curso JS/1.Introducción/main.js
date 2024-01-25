//alert('Welcome to my world, human!')
//JavaScript NO ES TIPADO!! - Es decir no hay que definir el tipo de datos
//JavaScript define variables por asignación

// ENTRADAS
//Definimos una variable y le asignamos un valor
let entero = 0; // Variable tipo entero
let decimal = 3.1416; // Valiable tipo decimal, double o float
let texto = "Hello World!"; // Variable tipo texto o string

const PI = 3.1416; // Constante matematica
const E = 2.7

// PROCESO
//Capturamos un valor y lo almacenamos o asignamos en la variable dato
let dato = prompt("Escribe su edad:")

// SALIDA
console.log("La edad es:" , dato); // Hace la salida por la consola incluida del browser
document.write("La edad ingresada es: " + dato); // Escribe dentro del body del html el valor
alert("La edad ingresada es: " + dato) // Ojo! es intrusivo = CARGA PRIMERO QUE TODO LO DEMÁS