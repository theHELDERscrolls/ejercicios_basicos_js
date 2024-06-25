// 01. Luke Skywalker cumple años.
const jedi = { nombre: "Luke Skywalker", edad: 19 };
// const jedi = { nombre: "Luke Skywalker", edad: 25 };

// 02. Presentación al estilo Leia Organa.
const name = "Leia";
const lastName = "Organa";
const age = 20;

console.log(
  `Soy ${name} ${lastName}, tengo ${age} años y soy una princesa de Alderaan.`
);

// 03. Calculando el coste total de sables de luz.
const sable1 = { name: "Shoto de Yoda", price: 1500 };
const sable2 = { name: "Shoto de Darth Vader", price: 2000 };

const sum = sable1.price + sable2.price;
console.log(sum);

// 04. Actualizando el precio final de las naves.
let precioBaseGlobal = 25000;

const nave1 = {
  nombre: "Ala-X",
  precioBase: 50000,
  precioFinal: 60000,
};
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

const sumNave1 = precioBaseGlobal + nave1.precioBase;
const sumNave2 = precioBaseGlobal + nave2.precioBase;
console.log(sumNave1, sumNave2);
