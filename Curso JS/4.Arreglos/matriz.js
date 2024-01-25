// No existen las matrices como estructura de datos

let equipo = [
    ["arquero",],
    ["defensa1", "defensa2", "defensa3"],
    ["atacante1", "atacante2"]
];

equipo.forEach((element) => {
    console.log(element);
});

equipo[0][0] = "arquero restrepo"; 
equipo[1][1] = "derek defensa"; 

console.log(equipo);