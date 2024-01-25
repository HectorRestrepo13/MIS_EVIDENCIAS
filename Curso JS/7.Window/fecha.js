
let fechaNacimiento = new Date('2003/05/02');
let fechaActual = new Date('2023/06/28');
let resta = fechaActual - fechaNacimiento;

let convercion = ((((resta/1000)/60)/60)/24)

document.write(convercion);

let fechaHoy = new Date();
