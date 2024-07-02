/* Usa un bucle y dos condiciones para imprimir por
consola el nombre de los usuarios que sean menores
de edad precedidos por el texto "Usuarios menores de
edad:" y otro que imprima a los usuarios mayores de
edad, precedido del texto "Usuarios mayores de edad:" */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const over18 = [];
const under18 = [];

for (const user of users) {
  if (user.years >= 18) {
    over18.push(user.name);
  } else {
    under18.push(user.name);
  }
}

console.log("Usuarios mayores de edad: " + over18);
console.log("Usuarios menores de edad: " + under18);
