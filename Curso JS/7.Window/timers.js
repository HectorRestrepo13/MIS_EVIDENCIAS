// Está en el elemento windows y me permite programar acciones separadas por tiempo, que se ejecutan en un tiempo determinado
// La unidad de medida minima de tiempo en javascript es milisegundos y 1 segundo es = a 1.000 milisegundos

let saludar = () => {
    return document.write(`Hola Js <br>`);
}

setTimeout(saludar, 4000);  // Usamos una función callback a ejecutarse en 4 segundos