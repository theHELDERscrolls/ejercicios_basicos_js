/* Usa un for para reemplazar todas las comidas que
no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits[0];
  } 
}

console.log(foodSchedule);
