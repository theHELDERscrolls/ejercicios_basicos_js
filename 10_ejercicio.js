// Calcula el promedio.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let result = 0; // indicamos esta variable para sumarle los elem.
  for (num of numberList) { // recorremos el array y almacenamos el elem. como "num".
    result += num; // result = result + num. El número recorrido se suma al resltado inicial indicado (0).
  }
  console.log(result / numbers.length);
}
average(numbers);
