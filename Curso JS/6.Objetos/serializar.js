//usar el estandar JSON(JAVASCRIPT OBJECT NOTATION) para transformar string a objetos y viceversa

// Objeto definido con anotacion JSON
let articulo ={
    id:900,
    descripcion: "camiseta del deporCali",
    existencia:45,
    estadoActivo: true,
    precioVenta:150000
};

// aca tasnforma un Objeto a un string
let articuloSTRI =JSON.stringify(articulo)
console.log(articuloSTRI);

// aca cojo el string y lo trasnformo de nuevo a Objeto JAVASCRIPT
let articuloJson = JSON.parse(articuloSTRI)
console.log(articuloJson);

addEventListener('')