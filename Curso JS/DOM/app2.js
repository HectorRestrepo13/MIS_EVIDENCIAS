//queryselector me permite selecionar grupos de etiquetas, crea una lista indexeada

const li = document.querySelectorAll("li");
console.log(li.length);

//ejemplo de childnodes
const capa = document.getElementById("capa");
//esta es la creacion del nodelist y almacenamiento en variable
const nodosHijos = capa.childNodes;
//console.log(nodosHijos);

//ejemplo de item con node list

//console.log(nodosHijos.item(3));

//recorriendo el nodelist

//entries devuelve llave-valor de la lista(array)
/* for (const entradaLista of nodosHijos.entries()) {
  console.log(entradaLista);
}

//values devuelve solamente los valores de la lista
for (const valores of nodosHijos.values()) {
  console.log(valores);
}

//keys devuelve solamente las llaves de la lista
for (const llaves of nodosHijos.keys()) {
  console.log(llaves);
}
 */

nodosHijos.forEach((valor) => {
  console.log(valor);
});
