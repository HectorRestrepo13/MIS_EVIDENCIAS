// Definimos el arreglo de objetos con 3 objetos, cada objeto tiene 4 atributos
let aprendices = [
  {
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: true,
  },
  {
    id: 139,
    nombre: "Juan David Montoya",
    edad: 19,
    estaActivo: true,
  },
  {
    id: 180,
    nombre: "Kevin Alzate",
    edad: 22,
    estaActivo: true,
  },
];

let miSelect = document.getElementById("miSelect");
let idAprendiz = document.getElementById("idAprendiz");

aprendices.forEach((aprendiz) => {
  // Creamos la fila
  let opcion = `<option value="${aprendiz.id}">${aprendiz.nombre}</option>`;
  miSelect.innerHTML += opcion;
});

function cambiar() {
  return (idAprendiz.innerHTML = `ID: ${document.getElementById("miSelect").value}`);
}
