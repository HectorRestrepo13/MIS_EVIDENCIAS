let planetasSistemaSolar = {
  mercurio: {
    id: 1,
    nombre: "Mercurio",
    descripcion:
      "Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño.",
    temperatura: "440 K (166 °C)",
  },
  venus: {
    id: 2,
    nombre: "Venus",
    descripcion:
      "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte.",
    temperatura: "737 K (463,85 °C)",
  },
  tierra: {
    id: 3,
    nombre: "Tierra",
    descripcion:
      "La Tierra es un planeta del sistema solar que gira alrededor de su estrella en la tercera órbita más interna.",
    temperatura: "287,2 K​ (14,05 °C)",
  },
  marte: {
    id: 4,
    nombre: "Marte",
    descripcion:
      "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.",
    temperatura: "227 K (−46 °C)",
  },
  jupiter: {
    id: 5,
    nombre: "Jupiter",
    descripcion:
      "Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.3​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores.",
    temperatura: "152 K (−121,15 °C)",
  },
  saturno: {
    id: 6,
    nombre: "Saturno",
    descripcion:
      "Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra.",
    temperatura: "143 K (−130,15 °C)",
  },
  urano: {
    id: 7,
    nombre: "Urano",
    descripcion:
      "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo.",
    temperatura: "68 K (−205,2 °C)",
  },
  neptuno: {
    id: 8,
    nombre: "Neptuno",
    descripcion:
      "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar.",
    temperatura: "53 K (-220 °C)",
  },
  pluton: {
    id: 9,
    nombre: "Pluton",
    descripcion:
      "Plutón, designado (134340) Pluto, es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno, descubierto por Clyde Tombaugh el 18 de febrero de 1930.",
    temperatura: "44 K (-229,1 °C)",
  },
};

let alerta = document.getElementById("alerta");

function mostrarAlerta(planeta) {
  let nombre, descripcion, temperatura;
  document.getElementById(`${planeta}`).className += " border border-3 border-secondary-subtle rounded-circle";
  switch (planeta) {
    case "mercurio":
      nombre = planetasSistemaSolar.mercurio.nombre;
      descripcion = planetasSistemaSolar.mercurio.descripcion;
      temperatura = planetasSistemaSolar.mercurio.temperatura;
      break;
    case "venus":
      nombre = planetasSistemaSolar.venus.nombre;
      descripcion = planetasSistemaSolar.venus.descripcion;
      temperatura = planetasSistemaSolar.venus.temperatura;
      break;
    case "tierra":
      nombre = planetasSistemaSolar.tierra.nombre;
      descripcion = planetasSistemaSolar.tierra.descripcion;
      temperatura = planetasSistemaSolar.tierra.temperatura;
      break;
    case "marte":
      nombre = planetasSistemaSolar.marte.nombre;
      descripcion = planetasSistemaSolar.marte.descripcion;
      temperatura = planetasSistemaSolar.marte.temperatura;
      break;
    case "jupiter":
      nombre = planetasSistemaSolar.jupiter.nombre;
      descripcion = planetasSistemaSolar.jupiter.descripcion;
      temperatura = planetasSistemaSolar.jupiter.temperatura;
      break;
    case "saturno":
      nombre = planetasSistemaSolar.saturno.nombre;
      descripcion = planetasSistemaSolar.saturno.descripcion;
      temperatura = planetasSistemaSolar.saturno.temperatura;
      break;
    case "urano":
      nombre = planetasSistemaSolar.urano.nombre;
      descripcion = planetasSistemaSolar.urano.descripcion;
      temperatura = planetasSistemaSolar.urano.temperatura;
      break;
    case "neptuno":
      nombre = planetasSistemaSolar.neptuno.nombre;
      descripcion = planetasSistemaSolar.neptuno.descripcion;
      temperatura = planetasSistemaSolar.neptuno.temperatura;
      break;
    case "pluton":
      nombre = planetasSistemaSolar.pluton.nombre;
      descripcion = planetasSistemaSolar.pluton.descripcion;
      temperatura = planetasSistemaSolar.pluton.temperatura;
      break;
  }
  
  alerta.innerHTML = `
    <div class="alert alert-light mt-3" role="alert">
        <h4 class="alert-heading">${nombre}</h4>
        <p>${descripcion}</p>
        <hr>
        <p class="mb-0">${temperatura}</p>
    </div>
    `;
};

function borrar(planeta) {
    document.getElementById(`${planeta}`).className = "img-fluid";
    alerta.innerHTML = "";
};
