// Busca la palabra más larga.
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longest = stringList[0]; // 1º elem. del array es el más grande.
  for (i = 1; i < stringList.length; i++) // recorro array a partir de 2º elem. 
  { 
    if (stringList[i].length > longest.length) // si el nuevo elem. es más largo que el indicado...
    { 
      longest = stringList[i]; // ... pasará a ser el nuevo elemento más largo.
    }
  }
  return longest;
}

findLongestWord(avengers);
console.log(findLongestWord(avengers));
