function Ejer1() {
    let SumaNomina = null;
    for (let index = 0; index < 15; index++) {
       SumaNomina += parseInt(window.prompt(`Digita salario del profesor #${index+1}:`))
    }
    alert(`La nómina es: ${SumaNomina}`)
}

function Ejer2() {
    let SumaPares = null, PromedioImpares = null, ContadorImpares = null;
    let Limite = parseInt(window.prompt(`¿Hasta que numero ir?:`));
    for (let index = 0; index < Limite; index++) {
        let Numeros = parseInt(window.prompt(`Digita el numero:`));
        if (Numeros%2 == 0) {
            SumaPares += Numeros;
        } else {
            PromedioImpares += Numeros;
            ContadorImpares++;
        }
    }
    PromedioImpares = PromedioImpares / ContadorImpares;
    alert(`La suma de los pares es: ${SumaPares} \nEl promedio de los impares es: ${PromedioImpares}`)
}

function Ejer3() {
    let Candidato1 = null, Candidato2 = null, Candidato3 = null, Candidato4 = null, Candidato5 = null, Conteo = null;
    let Bucle = 1;
    while (Bucle == 1) {
        let Votos = parseInt(window.prompt(`¿Por quien quieres votar?: \n1) Petro \n2) Uribe \n3) Fico \n4) Pastrana \n5) El viejito \n0) Salir`));
        if (Votos == 1) {
            Candidato1++;
            Conteo++;
        } else if (Votos == 2) {
            Candidato2++;
            Conteo++;
        } else if (Votos == 3) {
            Candidato3++;
            Conteo++;
        } else if (Votos == 4) {
            Candidato4++;
            Conteo++;
        } else if (Votos == 5) {
            Candidato5++;
            Conteo++;
        } else if (Votos == 0) {
            Bucle = 0;
        } else {
            alert(`Numero digitado inexistente.`);
        }
    }
    alert(`Votos Petro: ${Candidato1} - ${(Candidato1 * Conteo) / 100}% \nVotos Uribe: ${Candidato2} - ${(Candidato2 * Conteo) / 100}% \nVotos Fico: ${Candidato3} - ${(Candidato3 * Conteo) / 100}% \nVotos Pastrana: ${Candidato4} - ${(Candidato4 * Conteo) / 100}% \nVotos El viejito: ${Candidato5} - ${(Candidato5 * Conteo) / 100}% \n`);    
}

let Ejer4Resultado = document.getElementById("Ejer4Resultado");
function Ejer4() {
    let Bucle = 1;

    let DatoNumerico = parseInt(window.prompt(`Digita el numero para crear piramide invertida:`));
    while (Bucle == 1) {
        let Conteo1 = 0;
        let Conteo2 = 1;
        Cadena1 = `${Conteo1}`;
        Cadena2 = `${Conteo2}`;
        Conteo1++;
        Conteo2++;
    }
}