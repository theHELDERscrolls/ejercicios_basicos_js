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

function average(list) {
  let total = 0;

  for (const element of list) {
    if (typeof element === "number") {
      total += element;
    } else {
      total += element.length;
    }
  }
  const promedio = total / list.length;
  console.log(promedio);
}

average(mixedElements);
