let estudiantes = [];
let terminar = false;

while (!terminar) {
  const estudiante = {
    nombre: prompt("Ingrese el nombre del estudiante: "),
    edad: prompt("Ingrese la edad del estudiante: "),
    carrera: prompt("Ingrese la carrera del estudiante: "),
  };
  estudiantes.push(estudiante);

  let response = prompt("¿Desea terminar de registrar? (si/no/terminar)");

  response = response ? response : "no";
  response = response.toLowerCase().trim();

  terminar = response === "si" || response === "terminar";
}
console.table(estudiantes);

// TODO: pasar asistencia
estudiantes.forEach((estudiante) => {
  const msg = `Asistio el estudiante ${estudiante.nombre}? `;
  estudiante.asistencia = confirm(msg);
});
console.table(estudiantes);

// TODO: Mostrar alumnos que asistieron
const asistencias = estudiantes.filter((estudiante) => estudiante.asistencia);
console.table(asistencias);

// TODO: Mostrar alumnos que NO asistieron
// TODO: Estudiantes mayores de edad
// TODO: Estudiantes como String Array 'nombre:edad:asistencia'

