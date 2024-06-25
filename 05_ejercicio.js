/* En base a este código, cambia todos los "COMPLETAR" por la condición
correspondiente para que se lancen todos los console.log correctamente */

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo.
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

// 01.
const dividir1 = number2 / number1;
if (dividir1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

// 02.
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

// 03.
if (number3 != number1) {
  console.log("number3 es distinto number1");
}

// 04.
const multiplica1 = number3 * 5;
if (number1 == multiplica1) {
  console.log("number3 por 5 es igual a number1");
}

// 05.
const multiplica2 = number3 * 5;
const multiplica3 = number1 * 2;
if (multiplica2 == number1 && multiplica3 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

// 06.
const dividir2 = number2 / 2;
const dividir3 = number1 / 5;
if (dividir2 == number1 || dividir3 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}
