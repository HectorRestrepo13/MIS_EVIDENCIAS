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
//funciones de la app

const guardar =()=>{
    tareas.push(
        {
            id:id.value,
            tarea:tarea.value,
            detalle:detalle.value
        }
    )
   // window.location.href="/index.html"
    mostrar();
}

const mostrar =()=>{
    //muestra todo el arreglo
     // console.log(tareas)
     //muestra la posicion indicada del arreglo
    // console.log(tareas[2])
    // en la posicion indicada del arreglo de objetos un valor especifico de la fila (columna)
    // console.log(tareas[2].tarea)


    //map es la ECMA JS 2015
    /* tareas.map((tarea)=>{
    console.log(tarea.id)
    }); */
    miTabla.innerHTML="";
    tareas.map((tarea)=>{
        let fila = `<tr> <td>${tarea.id}</td> <td>${tarea.tarea}</td> <td>${tarea.detalle}</td> </tr>`;
        miTabla.innerHTML+=fila
    })
}


//sereailizar de texto a objeto

const serializarJson =()=>{
let texto = '{"id":9,"nombre":"hector","estado":true}';
console.log(texto);
let json = JSON.parse(texto)
console.log(json);
}


const serializarTxt =()=>{
    let objeto ={id:89,nombre:"hector",edad:30,estado:true};
    console.log(objeto);
    let texto = JSON.stringify(objeto);
    console.log(texto);
}