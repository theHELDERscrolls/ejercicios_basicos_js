/* Contador de repeticiones: crea una función que  nos devuelva
el nº de veces que se repite cada una de las palabras que lo
conforma. */

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  // creamos un OBJETO donde almacenar la palabra y el nº de veces que se repite.
  const counts = {};

  //recorremos el array y almacenamos el elemento en "word".
  for (const word of list) {
    // si "word" se encuentra en "counts", súmale 1.
    // si es 0 (no está en "counts"), añádelo y súmale 1.
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

console.log(repeatCounter(words));

//recorremos el array entero.
