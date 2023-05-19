function suma(a, b) {
  return Number(a) + Number(b);
}

let continuar = true;

do {
  let num1;
  do {
    num1 = prompt("Ingrese el primer numero: ");
  } while (!num1 || isNaN(num1));

  let num2;
  while (!num2 || isNaN(num2)) {
    num2 = prompt("Ingrese el segundo numero: ");
  }

  let operacion = prompt("Que operacion desea realizar?");
  let resultado;

  let operacionLower = operacion.toLowerCase().trim();
  if (operacionLower == "suma") {
    resultado = suma(num1, num2);
  }

  alert("El resultado es: " + resultado);

  continuar = confirm("Desea hacer otro calculo?");
} while (continuar);
