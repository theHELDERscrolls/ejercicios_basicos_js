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

function removeDuplicates(list) {
  const onlyOne = []; // array para almacenar sin duplicar.
  for (const item of list) {
    if (!onlyOne.includes(item)) {
      onlyOne.push(item);
    }
  }
  console.log(onlyOne);
}

removeDuplicates(duplicates);
