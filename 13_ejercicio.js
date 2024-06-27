/* Buscador de nombres: crea una función que reciba por parámetro un array y el valor
que desea comprobar que existe dentro de ese array. Esta función comprueba si existe
el elemento, y en caso de que exista nos devuelve un true y la posición de dicho
elemento u por la contra un false. */

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const searchName = "Tony";

function nameFinder(nameList) {
  // Buscamos en la lista el nombre igual al introducido en "searchName".
  if (nameList.find((element) => element === searchName)) {
    console.log(
      "El nombre " +
        searchName +
        " se encuentra en la lista en la posición " +
        (nameList.indexOf(searchName) + 1) /* Buscamos la 1º posición en la que se
        encuentra ese elemento sumando 1 para corregir. */
    );
  } else {
    console.log("El nombre " + searchName + " no se encuentra en la lista");
  }
}

nameFinder(names);
