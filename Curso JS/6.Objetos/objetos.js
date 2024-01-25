// Definiendo objetos
let aprendices = [{
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: true,
    colores: ["red", "azul", "rosado", true],
    materias: {
        ingles: 2.3,
        programacion: 5,
        etica: 4.5,
    },
},
{
    id: 200,
    nombre: "Felipe Perez"
}
];

// Operador de objetos de JS es el .
/* 
aprendices.nombre = "Pedro Perez";
aprendices.colores[0] = "rojo";
aprendices.materias.ingles = 2.8
console.log(aprendices.materias);
 */
/* 
aprendices.forEach((aprendiz) => {
    document.write(`${aprendiz.id} - ${aprendiz.nombre}<br>`);
});
 */

// Forma Clasica
/* 
aprendices.push({id: 400, nombre: "Jose Gomez"});
console.log(aprendices)
 */

// Forma Moderna
Object.entries(aprendices).forEach(([key, value]) => {
    if (value.nombre == "Felipe Perez") {
        console.log(value.nombre);
    }
});