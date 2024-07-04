/* Usa un for para reemplazar todas las comidas que
no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Imprime el array resultante. */

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

let notRepeatFruit = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits[notRepeatFruit];
    foodSchedule[i].isVegan = true;
    notRepeatFruit++;
  }
}

console.log(foodSchedule);
