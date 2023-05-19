## Ejercicio: Calculadora básica con loops y funciones

### Descripción

Crea una calculadora básica que permita realizar operaciones matemáticas simples como suma, resta, multiplicación y división. El programa debe seguir los siguientes pasos:

1. Utiliza la función `prompt` para pedir al usuario que ingrese el primer número.
2. Utiliza la función `prompt` nuevamente para pedir al usuario que ingrese el segundo número.
3. Utiliza la función `prompt` para preguntar al usuario qué operación desea realizar (suma, resta, multiplicación o división).
4. Utiliza una estructura `if/else if/else` para determinar qué operación debe realizarse según la opción seleccionada por el usuario.
5. Realiza la operación correspondiente y muestra el resultado utilizando la función `alert`.

### Pasos

1. Crea una función llamada `suma` que reciba dos parámetros: `num1` y `num2`. Esta función debe retornar la suma de los dos números.
2. Crea una función llamada `resta` que reciba dos parámetros: `num1` y `num2`. Esta función debe retornar la resta de los dos números.
3. Utiliza un loop `while` para solicitar al usuario que ingrese un número válido. Mientras el número ingresado no sea válido (por ejemplo, no sea un número), se debe mostrar un mensaje de error y solicitar nuevamente el número.
4. Utiliza un loop `do/while` para preguntar al usuario si desea realizar otra operación después de mostrar el resultado. Si el usuario confirma, el programa debe repetir los pasos 1 al 4. En caso contrario, el programa debe finalizar.

### Ejemplo de código

```javascript
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
```
