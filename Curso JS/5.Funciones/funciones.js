let Ejer1 = (Numero) => document.write(`El resultado es: ${Numero * Numero}<br>`);
Ejer1(parseInt(prompt(`Digita un numero:`)));

let Ejer2 = () => {for (let index = 0; index < 100; index++) {document.write(`${index}<br>`);}};
Ejer2();

let Ejer3 = (Numero1, Numero2) => document.write(`${((Numero1 + Numero2) / 2)}<br>`);
Ejer3(parseInt(prompt(`Digita el numero 1:`)), parseInt(prompt(`Digita el numero 2:`)))

let Ejer4 = (SalarioBase, DiasLaborados) => document.write(`La prima es: ${((SalarioBase * DiasLaborados)/360)}<br>`)
Ejer4(parseInt(prompt(`Digita el salario base:`)), parseInt(prompt(`Digita los dias laborados:`)))

