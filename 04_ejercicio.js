//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 01 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3]);

// 02 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");

// 03 - Cambia el primer elemento de este array por "Bambina".
aldeanos.splice(0, 1, "Bombina");

// 04 - Dale la vuelta a este array.
aldeanos.reverse();

// 05 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(1, 2, "Canela");

// 06 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
console.log(aldeanos[aldeanos.length - 1]);
