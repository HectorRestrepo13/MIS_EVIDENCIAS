// Manipular el DOM
const title = document.getElementById("title"); // Forma clásica

const title2 = document.getElementsByClassName("title2");

// Forma moderna

const tit1 = document.querySelector("#title");
const tit2 = document.querySelector(".title2");

const recipe = document.getElementById("recipe");

// Obtener propiedades

// alert(tit1.getAttribute("id")); // Obtiene la propiedad id

// alert(tit2.getAttribute("class"));

// Creación de elementos

const ingredientes = ["Sal", "Aceite"];

for (let i = 0; i < ingredientes.length; i++) {
  let dato = document.createElement("li");
  dato.innerText = ingredientes[i];
  recipe.append(dato);
}

// RETO - TABLA
const filaCabecera = document.createElement("tr");
const filasCabecera = ["Id", "Nombre", "Teléfono"];

const tabla = document.createElement("table");
const cabecera = document.createElement("thead");
cabecera.append(filaCabecera);

const cuerpo = document.createElement("tbody");
const filaCuerpo = document.createElement("tr");
const datosfilaCuerpo = document.createElement("td");
const filasCuerpo = ["Dato"];
datosfilaCuerpo.textContent = filasCuerpo[0];
filaCuerpo.append(datosfilaCuerpo);
cuerpo.append(filaCuerpo);

for (let i = 0; i < filasCabecera.length; i++) {
  let dato = document.createElement("th");
  dato.textContent = filasCabecera[i];
  filaCabecera.append(dato);
}
cabecera.appendChild(filaCabecera);
tabla.append(cabecera);
tabla.append(cuerpo);

document.body.append(tabla);

// Mostrar la cantidad de elementos hijos de un elemento
// alert(recipe.childElementCount);
