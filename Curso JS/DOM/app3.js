//ejemplos con el classlits css dinamico
/* const capa = document.getElementById("capa");

capa.addEventListener("click", () => {
  capa.classList.add("fondo1", "borde");
});
 */

const pereira = document.querySelector("#pereira");
const cuidades = document.querySelector("#cuidades");
//elemento padre traversal DOM

/* console.log(pereira.parentElement);
console.log(pereira.childNodes);
 */

console.log(cuidades.firstElementChild);
console.log(cuidades.children[2]);

//hermanos
console.log(cuidades.previousElementSibling); //anterior
console.log(cuidades.nextElementSibling); //posterior
