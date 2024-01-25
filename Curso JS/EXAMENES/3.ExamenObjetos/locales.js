let objLocales = [
    {
        idCiudad: 1,
        nombre: "Cartago",
        fundacion: "1540/14/03",
        habitantes: 205000
    },
    {
        idCiudad: 2,
        nombre: "Buga",
        fundacion: "1240/14/03",
        habitantes: 230000
    },
    {
        idCiudad: 3,
        nombre: "Cali",
        fundacion: "1540/14/03",
        habitantes: 106000
    },
    {
        idCiudad: 4,
        nombre: "Ansermanuevo",
        fundacion: "1330/14/03",
        habitantes: 344000
    },
    {
        idCiudad: 5,
        nombre: "Tulua",
        fundacion: "2010/14/03",
        habitantes: 30300
    },
    {
        idCiudad: 6,
        nombre: "Buenaventura",
        fundacion: "1840/14/03",
        habitantes: 105000
    },
    {
        idCiudad: 7,
        nombre: "Jumbo",
        fundacion: "1940/14/03",
        habitantes: 40000
    },
    {
        idCiudad: 8,
        nombre: "Caicedonia",
        fundacion: "1240/14/03",
        habitantes: 120000
    },
    {
        idCiudad: 9,
        nombre: "Zaragoza",
        fundacion: "1550/14/03",
        habitantes: 400000
    },
    {
        idCiudad: 10,
        nombre: "Obando",
        fundacion: "1330/14/03",
        habitantes: 50000
    },
];

let miTabla = document.getElementById("miTabla");

objLocales.forEach((local) => {
    // Creamos la fila
    let fila = `<tr>
                    <td>${local.idCiudad}</td>
                    <td>${local.nombre}</td>
                    <td>${local.fundacion}</td>
                    <td>${local.habitantes}</td>
                </tr>`;
    miTabla.innerHTML += fila;
});

let miSelect = document.getElementById("miSelect");

objLocales.forEach((local) => {
  let opcion = `<option value="${local.idCiudad}">${local.nombre}</option>`;
  miSelect.innerHTML += opcion;
});