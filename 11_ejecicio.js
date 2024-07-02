/* Calcular el promedio mezclado: crea una función que 
reciba por parámetros un array y cuando es un valor
number lo sume y de lo contrario cuente la longitud
del string y lo sume. */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let sumNumber = 0;
  let sumLetter = 0;

  for (const element of list) {
    // typeof para diferenciar los elemenetos number y string del array y aplicarles lo indicado.
    if (typeof element === "number") {
      sumNumber += element;
    } else if (typeof element === "string") {
      sumLetter += element.length;
    }
  }
  console.log("Suma de números: " + sumNumber);
  console.log("Suma de letras: " + sumLetter);
}

averageWord(mixedElements);
