let radio = 0.75;
let altura = 2.64;

let area = (2 * 3.1416 * radio * (altura + radio));
let volumen = 3.1416 * Math.pow(radio, 2) * altura;

document.write(`El area es: ${area} <br>`);
document.write(`El volumen es: ${volumen}`);