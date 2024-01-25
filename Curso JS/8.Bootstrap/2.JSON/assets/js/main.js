// Definimos el arreglo de objetos con 3 objetos, cada objeto tiene 4 atributos
let aprendices = [
    {
        id: 135,
        nombre: "Anderson Tasama",
        edad: 20,
        estaActivo: false,
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
    {
        id: 200,
        nombre: "Freddy Rivera",
        edad: 21,
        estaActivo: true,
    },
];

// Llenamos la Tabla de forma interactiva
let miTabla = document.getElementById("miTabla");

aprendices.forEach((aprendiz) => {
    // Creamos la fila
    let fila = `<tr>
                    <td>${aprendiz.id}</td>
                    <td>${aprendiz.nombre}</td>
                    <td>${aprendiz.edad}</td>
                    <td>${aprendiz.estaActivo}</td>
                </tr>`;
    miTabla.innerHTML += fila;
});

// Llenamos el Select de forma interactiva
let miSelect = document.getElementById("miSelect");
let edadAprendiz = document.getElementById("edadAprendiz");

aprendices.forEach((aprendiz) => {
  let opcion = `<option value="${aprendiz.edad}">${aprendiz.nombre} estado ${aprendiz.estaActivo}</option>`;
  miSelect.innerHTML += opcion;
});

function cambiar() {
    return (edadAprendiz.innerHTML = `Edad: ${document.getElementById("miSelect").value}`);
  }