/* Usa un bucle para crear tres arrays de películas
filtradas por categorías.
Película pequeña -> menos de 100 min
Película mediana -> más de 100 min
Película grande -> más de 200 min
Imprime cada array por consola.*/

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const little = [];
const medium = [];
const big = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    little.push(movie.name);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    medium.push(movie.name);
  } else if (movie.durationInMinutes >= 200) {
    big.push(movie.name);
  }
}

console.log("Peículas pequeñas: " + little);
console.log("Peículas medianas: " + medium);
console.log("Peículas grandes: " + big);
