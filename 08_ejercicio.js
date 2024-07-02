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
  let longestWord = "";
  for (i = 0; i < stringList.length; i++) {
    const string = stringList[i];
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  console.log("La palabra más larga es: " + longestWord);
}

findLongestWord(avengers);
