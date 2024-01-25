//crear el arreglo de objetos vacio

const tareas =[];

//capturamos los elementos html con js para programar
let tarea = document.getElementById("tarea");
let id = document.getElementById("id");
let detalle = document.getElementById("detalle");
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let miTabla = document.getElementById("miTabla");
let btnJson = document.getElementById("btnJson");
let btnserializartxt = document.getElementById("btnserializartxt");

//instanciamos el almacenamiento local -- iniciar el servidor de bd
const db = window.localStorage;
console.log(db);
//metodo para almacenar : setItem(llave,contenido)
//metodo para leer el contenido


db.setItem(10,"hector");
db.setItem(15,"ana");
db.setItem(12,JSON.stringify({nombre:"pedro",apellido:"restrepo"}));
const datos = window.localStorage;
const guardar=()=>{
    datos.setItem(id.value,JSON.stringify({tarea:tarea.value,detalle:detalle.value}) )
}

const mostrar =()=>{
    console.log(JSON.parse(datos.getItem(50)))
    let numero = id.value;

    
        let mostar =`<tr> <td>${JSON.parse(datos.getItem(numero))} </td> <td>${datos.getItem(numero)} </td> </tr>`;
    
   
    miTabla.innerHTML+=mostar
}