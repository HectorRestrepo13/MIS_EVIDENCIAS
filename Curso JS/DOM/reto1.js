const capa = document.createElement("ul");
capa.setAttribute("id", "capa");

const productos = ["arroz", "leche", "agua", "torta"];
const item = ["item1", "item2", "item3", "item4"];
for (let i = 0; i < productos.length; i++) {
  const capaHijo = document.createElement("li");
  capaHijo.classList.add(item[i]);
  capaHijo.setAttribute("id", item[i]);
  capaHijo.textContent = productos[i];
  capa.append(capaHijo);
}

document.body.append(capa);

const ul = document.getElementById("capa");
let contador = 0;

ul.addEventListener("click", () => {
  if (contador == 0) {
    ul.style.background = "blue";
    contador = contador + 1;
  } else if (contador == 1) {
    ul.style.background = "green";
    contador = contador + 1;
  } else if (contador == 2) {
    ul.style.background = "red";
    contador = contador + 1;
  } else if (contador == 3) {
    ul.style.background = "yellow";
    contador = 0;
  }
});

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
item1.addEventListener("click", () => {
  capa.removeChild(item1);
});

item2.addEventListener("click", () => {
  capa.removeChild(item2);
});
item3.addEventListener("click", () => {
  capa.removeChild(item3);
});
item4.addEventListener("click", () => {
  capa.removeChild(item4);
});

let boton = document.createElement("button");
boton.textContent = "Eliminar";
boton.append();
document.body.append(boton);

