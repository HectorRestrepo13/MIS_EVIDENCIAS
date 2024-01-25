// Lectura de un Archivo Externo JSON usamos promesa de JavaScript PROMISES

// fetch("aprendices.json")
let resultado = document.getElementById("resultado");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((aprendiz) => {
    return aprendiz.json();
  })
  .then((aprendiz) => {
    console.log(aprendiz);
    aprendiz.forEach((dato) => {
      let datos = `${dato.name}<br>`;
      resultado.innerHTML += datos;
  });
  
  });



