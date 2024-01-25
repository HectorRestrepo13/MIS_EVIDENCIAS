let heroesMarvel = {
  spiderman: {
    id: "spiderman.jpeg",
    nombre: "Spider-Man",
    descripcion:
      "Peter Parker nació el 10 de agosto de 2001 en Forest Hills, Queens, y es criado principalmente por su tío Ben y su tía May​. Mientras asistía a la escuela secundaria en la Escuela de Ciencia y Tecnología de Midtown en 2015, Parker es mordido por una araña radioactiva, lo que le otorga habilidades sobrehumanas.",
    edad: "21 años",
  },
  ironman: {
    id: "ironman.webp",
    nombre: "Iron Man",
    descripcion:
      "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte.",
    edad: "737 K (463,85 °C)",
  },
  capitanamerica: {
    id: "capitanamerica.webp",
    nombre: "Capitan America",
    descripcion:
      "La Tierra es un planeta del sistema solar que gira alrededor de su estrella en la tercera órbita más interna.",
    edad: "287,2 K​ (14,05 °C)",
  },
  hulk: {
    id: "hulk",
    nombre: "Hulk.webp",
    descripcion:
      "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.",
    edad: "227 K (−46 °C)",
  },
  deadpool: {
    id: "deadpool.jpeg",
    nombre: "Deadpool",
    descripcion:
      "Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.3​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores.",
    edad: "152 K (−121,15 °C)",
  },
};

let carta = document.getElementById("carta");
let heroe = document.getElementById("heroe").value;

function mostrarCarta() {
  let nombre, descripcion, edad, id;
  if (heroe == "spiderman" || heroe == "spider man") {
    id = heroesMarvel.spiderman.id;
    nombre = heroesMarvel.spiderman.nombre;
    descripcion = heroesMarvel.spiderman.descripcion;
    edad = heroesMarvel.spiderman.edad;
  } else if (heroe == "ironman" || heroe == "iron man") {
    id = heroesMarvel.ironman.id;
    nombre = heroesMarvel.ironman.nombre;
    descripcion = heroesMarvel.ironman.descripcion;
    edad = heroesMarvel.ironman.edad;
  } else if (heroe == "capitanamerica" || heroe == "capitan america") {
    id = heroesMarvel.capitanamerica.id;
    nombre = heroesMarvel.capitanamerica.nombre;
    descripcion = heroesMarvel.capitanamerica.descripcion;
    edad = heroesMarvel.capitanamerica.edad;
  }

  carta.innerHTML = `
  <div class="card mb-3 shadow">
    <img src="./assets/media/${id}" class="card-img-top" style="height: 400px; object-fit: cover;" alt="${nombre}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <p class="card-text"><small class="text-body-secondary">Edad: ${edad}</small></p>
    </div>
  </div>
    `;
}
