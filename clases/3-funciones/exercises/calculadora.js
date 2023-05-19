// Función para realizar la suma
function suma(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

// Función para realizar la resta
function resta(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

// Variable para controlar el loop principal
let confirmation;

// Loop principal
do {
  // Paso 1: Pedir al usuario el primer número
  let num1;
  while (isNaN(num1)) {
    num1 = prompt("Ingrese el primer número:");
  }

  // Paso 2: Pedir al usuario el segundo número
  let num2;
  while (isNaN(num2)) {
    num2 = prompt("Ingrese el segundo número:");
  }

  // Paso 3: Preguntar al usuario la operación a realizar
  let operacion = confirm(
    "Seleccione la operación a realizar:\n\nAceptar: Suma\nCancelar: Resta"
  );

  // Paso 4: Realizar la operación correspondiente
  // Variable para almacenar el resultado
  let resultado;
  if (operacion) {
    // Suma
    resultado = suma(num1, num2);
  } else {
    // Resta
    resultado = resta(num1, num2);
  }
  alert("El resultado es: " + resultado);

  confirmation = confirm("¿Desea realizar otra operación?");
} while (confirmation);
