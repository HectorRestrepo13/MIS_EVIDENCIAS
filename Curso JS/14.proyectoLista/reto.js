
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let id = document.getElementById("id");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let miTabla = document.getElementById("miTabla");
const agendas =[];

const guardar=()=>{
    agendas.push(
        {
            id:id.value,
            nombre:nombre.value,
            apellido:apellido.value,
            email:email.value,
            telefono:telefono.value
        }
    )
mostrar();
}

const mostrar =()=>{
    miTabla.innerHTML="";
    agendas.map((agenda)=>{
        let fila = `<tr> <td>${agenda.id} </td> <td>${agenda.nombre} </td> <td>${agenda.apellido} </td> <td>${agenda.email} </td> <td>${agenda.telefono} </td> </tr>`;
        miTabla.innerHTML+=fila
    })

}