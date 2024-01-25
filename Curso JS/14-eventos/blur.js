let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");

//blur en la caja de texto 1

caja1.addEventListener("blur",(e)=>{
   if(caja1.value != "hector")
   {
    alert("debe llenar este input")
   }
})