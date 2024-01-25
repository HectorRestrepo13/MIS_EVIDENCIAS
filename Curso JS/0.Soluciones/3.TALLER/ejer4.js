function ejercicio4() {
    let nombre = document.getElementById("inptEjercicio4nombre").value;
    let sueldo = document.getElementById("inptEjercicio4sueldo").value;
    let tiempoTrabajado = document.getElementById("inptEjercicio4tiempoTrabajado").value;
    let cursos = document.getElementById("inptEjercicio4cursos").value;

    let porcentajeAumento = (Math.trunc(tiempoTrabajado / 5) * 10);
    let resultajeSueldo = (sueldo / 100) * porcentajeAumento;

    if (cursos >= 4) {
        return window.alert(`El aumento del sueldo de ${nombre} es:  $ ${resultajeSueldo}\nUsted obtuvo un bono por mejoramiento profesional de Bs 15000`);
    } else {
        return window.alert(`El aumento del sueldo de ${nombre} es:  $ ${resultajeSueldo}\nUsted no obtuvo el bono por mejoramiento profesional de Bs 15000`);
    }
}