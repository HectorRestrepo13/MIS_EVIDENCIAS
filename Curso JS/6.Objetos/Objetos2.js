// Objetos literales 
//Objet literal 
let aprendices = new Object();


let aprendiz = {
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
    mostrarDatos(){
        console.log(this.nombre+"  "+this.edad);

    }
};

//invocar los metodos
aprendiz.mostrarDatos()

//manipular el objeto como si fuera un array
// transformar en array
let aprendizArray = Object.entries(aprendiz);
//console.log(aprendizArray);

let aprendizKeys = Object.keys(aprendiz);
console.log(aprendizKeys);

//eliminar atributos de un objeto
aprendiz.edad = null; //pasarle un valor al atributo
delete aprendiz.estaActivo; // elimina fisicamente el atributo
console.log(aprendiz);