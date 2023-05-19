// Declaracion
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);

// Lectura
console.log(numbers[2]);

// Añadir elementos al array
numbers.push(18);
numbers.unshift(20);

console.log(numbers);

// Eliminacion de elementos de un arrays
// numbers.pop();
// numbers.splice(1, 3);
console.log(numbers);

// Iterar elementos de un array
console.log("Inicio de iteracion con variable!");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("Fin!");

console.log("Inicio de iteracion con 'for of'!");
for (let number of numbers) {
  console.log(number);
}
console.log("Fin!");

console.log("Inicio de iteracion con 'forEach'!");
numbers.forEach((item) => {
  console.log(item);
});
console.log("Fin!");

/// Metodos mas usados de un array
const estudiantes = [
  "jorge",
  "Cristian",
  "Presiete",
  "Gelalber",
  "Guti",
  "hector",
];
console.log(estudiantes);

// Filter
const filtered = estudiantes.filter((item) => item != "jorge");
console.log(filtered);

// Map
const mapped = estudiantes.map((estudiante) => "Estudiante: " + estudiante);
console.log(mapped);

// Find
const cris = estudiantes.find((item) => item === "Cristian");
console.log(cris);

// Find Index
const crisIndex = estudiantes.findIndex((item) => item === "Cristian");
console.log(crisIndex);

// Some
const hectorExists = estudiantes.some((item) => item === "Irian");
console.log(hectorExists);

// Includes
const irianExists = estudiantes.includes("irian");
console.log(irianExists);

// Reduce
const count = (previo, actual) => {
  if (actual) {
    previo++;
  }
  return previo;
};

const joined = estudiantes.reduce(count, 0);
console.log(joined);
