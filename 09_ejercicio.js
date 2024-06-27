// Calcula la suma.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let result = 0; // indicamos esta variable para sumarle los elem.
  for (let num of numberList) // recorremos el array y almacenamos el elem. como "num".
  { 
    result += num; // result = result + num. El número recorrido se suma al resltado inicial indicado (0).
  }
  return result;
}

sumNumbers(numbers);
console.log(sumNumbers(numbers));
