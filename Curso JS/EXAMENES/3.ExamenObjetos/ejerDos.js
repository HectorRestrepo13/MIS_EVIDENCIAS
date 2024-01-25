objFotos = [{}];
let miTabla2 = document.getElementById("miTabla2");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((fotos) => {
    return fotos.json();
  })
  .then((datos) => {
    for (let index = 0; index < 5; index++) {
        let fila = `<tr>
                    <td>${datos[index].title}</td>
                    <td><img src="${datos[index].url}" style="img: 20px;"></td>
                </tr>`;
        miTabla2.innerHTML += fila;
  }});

/*   for (let index = 0; index < objFotos.length; index++) {
    objFotos.forEach((dato) => {
        let fila = `<tr>
                    <td>${dato[index].title}</td>
                    <td>${dato[index].url}</td>
                </tr>`;
        miTabla2.innerHTML += fila;
    }); */
    
  
