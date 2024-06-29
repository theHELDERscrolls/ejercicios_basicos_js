/* Mixed for... of e includes: Usa un bucle forof para
recorrer todos los juguetes y elimina los que incluyan la
palabra gato (también puedes crear uno nuevo con solo los
que NO incluyan esa palabra) */

const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

// Creamos un array para los juguets sin "gato"
const toysFilter = [];

// Recorremos el array y almacenamos el valor en "key".
for (const key of toys) {
  // Si el name de key NO (!) tiene "gato"...
  if (!key.name.includes("gato")) {
    // ... añádelo al nuevo array
    toysFilter.push(key);
  }
}

console.log(toysFilter);
