//dom
let imagen = document.getElementById("imagen");
let btnEnviar = document.getElementById("btnEnviar");
let btnSaludar = document.getElementById("btnSaludar");
let titulo = document.getElementById("titulo");
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
console.log(btnSaludar);

btnSaludar.addEventListener('click',function(){
alert("prueba")

})

btnSaludar.addEventListener('mouseover',function(){
    alert("pasaste el mause por encima de mi")
})

/* imagen.addEventListener('mouseout',function(){
    alert("Salistes de la zona")
}) */

titulo.addEventListener('click',function(){
    titulo.innerHTML="bienvenido a adso"
})

caja1.addEventListener('keyup',(event)=>{
if(event.key == 'r')
{
    console.log("ganador");
    caja1.value=""
}
else
{
    console.log("siga jugando");
}
})

