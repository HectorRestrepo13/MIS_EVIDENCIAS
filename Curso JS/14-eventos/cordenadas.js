let imagen = document.getElementById("imagen");

imagen.addEventListener('click',(e)=>{
    console.log("coordenadas eje X: "+e.clientX+" cordenadas Eje Y "+e.clientY) ;
    console.log("coordenadas eje X: "+e.pageX+" cordenadas Eje Y "+e.pageY) ;
    console.log("coordenadas eje X: "+e.screenX+" cordenadas Eje Y "+e.screenY) ;
})