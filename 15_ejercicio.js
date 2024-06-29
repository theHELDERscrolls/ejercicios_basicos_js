/* Includes: haz un bucle y muestra por consola todos
aquellos valores del array que incluyan la palabra
"Camiseta". */

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

// recorremos el array u almacenamos en "product" el valor
for (const product of products) {
  // si ese valor "product" incluye "Camiseta"...
  if (product.includes("Camiseta")) {
    // ... muéstralo en consola.
    console.log(product);
  }
}
