## Ejercicio: Registro de estudiantes

En este ejercicio, pondremos en práctica los conceptos de arrays y objetos que hemos aprendido. Crearemos un programa en JavaScript que permita registrar estudiantes y mostrar su información.

### Pasos

1. Crea un array llamado `estudiantes` para almacenar los registros de los estudiantes. Cada registro será un objeto con las siguientes propiedades: `nombre`, `edad` y `carrera`.

2. Solicita al usuario que ingrese los datos del estudiante: nombre, edad y carrera. Puedes utilizar la función `prompt()` para obtener la información.

3. Crea un objeto `estudiante` con las propiedades ingresadas por el usuario.

4. Agrega el objeto `estudiante` al array `estudiantes` utilizando el método `push()`.

5. Repite los pasos 2 a 4 para registrar más estudiantes, o permite al usuario terminar el registro ingresando una opción como "no" o "terminar".

6. Muestra la información de todos los estudiantes registrados. Recorre el array `estudiantes` utilizando un bucle `for` o el método `forEach()`, y muestra por consola la información de cada estudiante.

### Ejemplo de código

```javascript
const estudiantes = [];

while (true) {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const edad = prompt("Ingrese la edad del estudiante:");
  const carrera = prompt("Ingrese la carrera del estudiante:");

  const estudiante = {
    nombre: nombre,
    edad: edad,
    carrera: carrera
  };

  estudiantes.push(estudiante);

  const finalizar = prompt("¿Desea terminar el registro? (Ingrese 'si' para finalizar)");
  if (finalizar.toLowerCase() === "si") {
    break;
  }
}

console.log("Información de los estudiantes:");

estudiantes.forEach(function(estudiante) {
  console.log("Nombre: " + estudiante.nombre);
  console.log("Edad: " + estudiante.edad);
  console.log("Carrera: " + estudiante.carrera);
  console.log("-----------------------");
});
```

En este ejemplo, hemos creado un programa que permite registrar estudiantes y mostrar su información. El usuario puede ingresar los datos de cada estudiante y decidir cuándo finalizar el registro. Luego, mostramos por consola la información de cada estudiante registrado.

¡Practica este ejercicio y experimenta con diferentes funcionalidades de arrays y objetos para mejorar tu comprensión y habilidades en JavaScript!