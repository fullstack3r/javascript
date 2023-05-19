function hacerAlgo(algo, creo) {
  console.log("Hola!");
  if (algo == "Algo") {
    algo = true;
  } else {
    algo = false;
  }
  return algo;
}

// debugger;

let variable = hacerAlgo("Perro");

// TODO: AQUI muestre un mensaje o otro
if (variable) {
  console.log("Es true");
} else {
  console.log("Es false");
}

// Control: if/else - while/for 🔵⚫
// Variables: number, string, boolean 🔵🟢
// Funciones: declaracion, uso, extras:arrow
// oa: Objectos y Arrays
