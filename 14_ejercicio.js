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
  const counts = {}; // objeto para almacenar las palabras y nº de repeticiones.
  for (const word of list) {
    /* Si la palabra se encuentra en counts o tiene un valor de 0 en counts (no está)
    súmale +1 */
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

console.log(repeatCounter(words));
