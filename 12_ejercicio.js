/* Crea una función que reciba por parámtetro un array y
compruebe si existen elementos duplicados. En caso de que
existan, los elimina para retornar un array sin los
elementos duplicados. */

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "patatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const onlyOne = []; // array para almacenar sin duplicar.

function removeDuplicates(list) {
  for (const item of list) {
    if (onlyOne.includes(item)) {
      console.log("se repite " + item);
      // si está incluido en "onlyOne" saca esto por consola.
    } else {
      onlyOne.push(item);
      // si no está incluido en "onlyOne", añádelo.
    }
  }
  console.log("Aquí tienes la lista sin duplicados: " + onlyOne);
}

removeDuplicates(duplicates);
