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
  for (let i = 0; i < list.length; i++) {
    if (onlyOne.includes(list[i])) {
      console.log("se repite " + list[i]);
      // si está incluido en "onlyOne" saca esto por consola.
    } else {
      onlyOne.push(list[i]);
      // si no está incluido en "onlyOne", añádelo.
    }
  }
}

removeDuplicates(duplicates);
console.log(onlyOne);
