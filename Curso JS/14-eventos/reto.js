let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let btnLimpiar = document.getElementById("btnLimpiar");
let btnEnviar = document.getElementById("btnEnviar");
let imagen = document.getElementById("imagen");
let contador = 0;
let arreglo =[
{User:"juan",
Password:"123x"

}
,
{User:"luisa",
Password:"z73b"

}

]

nombre.addEventListener("blur",(e)=>{
    console.log(nombre.value);
if(nombre.value == "")
{
    alert("Ingrese un Usuario por favor ")
}

})

password.addEventListener("blur",()=>{
    if(password.value == "")
    {
        alert("Ingrese un password por favor ")
    }
})

btnLimpiar.addEventListener('click',()=>{
    nombre.value="";
    password.value="";
})
btnEnviar.addEventListener('click',()=>
{
    let existe = false;
arreglo.map((usuario)=>{

    
if(usuario.User == nombre.value && usuario.Password == password.value)
{
    existe=true;
    
}



})

if(existe)
{
    window.location.href="bienvenido.html"
}
else
{
    alert("Usuario no encontrado ")
}

})

imagen.addEventListener('mouseleave',()=>{
    contador=contador+1;
    console.log("pasadas por la imagen es ");
    console.log(contador);
})