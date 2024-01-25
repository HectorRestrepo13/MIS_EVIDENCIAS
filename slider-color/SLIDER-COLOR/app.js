//aca estamos capturando los elementos del html para poder manipularlo desde js
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

//aca en una variable estoy guardando el valor de los Input 
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//aca estoy visualizando en el <p>(parrafo) el valor del input
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

//aca creo una funcion con las variables rojo,verde y azul donde creo ota variable pero con la etiqueta rgb que es para especificar un color, despues con la funcion style hago el body cambie de color 
function actualizarColor(rojo, verde, azul) {
  //aca meto en una variable los colores con la etiqueta rgb
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  //aca con la funcion hago que el body cambie de color y le pongo la variable con los colores
  document.body.style.backgroundColor = colorRGB;
}


// Para actualizar Red (Rojo).
//aca estoy creando un evento con el Change que se ejecutara cuando alla un cambio en el input 
inputRojo.addEventListener("change", (e) => {
  //aca en una variable estoy metiendo el valor del input(range) donde con el target puede obtener el valor
  rojo = e.target.value;
  //aca estoy actualizando el parrafo con el nuevo valor para que se visualice 
  textoRojo.textContent = rojo;
  //aca estoy ejecutando la funcion donde hace que el body cambie de color y le mando los nuevos valores 
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
