let resultado = document.getElementById("Resultado");
let saludar = () => {return (resultado.innerHTML += `Hola Walter <br>`)};
let iniciar = () => { bucle = setInterval(saludar, 1000)}; // Usamos una función callback a ejecutarse en 4 segundos
let parar = () => { clearInterval(bucle)};