/* For... in: Usar forin para imprimir por consola todos
los datos del alienígena. */

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const property in alien) {
  console.log(
    "La propiedad " + property + " tiene como valor " + alien[property]
  );
}
