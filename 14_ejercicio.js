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
  const counts = {};

  for (const word of list) {
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  console.log(counts);
}

repeatCounter(words);
