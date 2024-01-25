// transformar los elementos de un objeto js en variables

let articulo ={
    id:900,
    descripcion: "camiseta del deporCali",
    existencia:45,
    estadoActivo: true,
    precioVenta:150000
}

//extraje del objeto las variables
let {descripcion,precioVenta}=articulo;

console.log(articulo.descripcion);