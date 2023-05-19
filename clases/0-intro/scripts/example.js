// Solicitar al usuario que ingrese su nombre y edad
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = prompt("Por favor, ingresa tu edad:");
let procesar = confirm("¿Deseas procesar los datos ingresados?");

if (procesar) {
  // Verificar si se proporcionaron los datos
  if (nombre === null || nombre.trim() === "") {
    alert("Error: No has proporcionado un nombre válido.");
  } else if (edad === null || isNaN(edad)) {
    alert("Error: No has proporcionado una edad válida.");
  } else {
    // Mostrar los datos ingresados
    const result = "Datos ingresados:\n\nNombre: " + nombre + "\nEdad:" + edad;
    alert(result);
  }
}
