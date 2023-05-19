// Creacion
const persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Desarrollador"
};
// Acceso a datos
console.log(persona.nombre);     // "Juan"
console.log(persona["edad"]);    // 25
console.log(persona.profesion);  // "Desarrollador"

// Actualizacion
persona.edad = 30;
persona["profesion"] = "Ingeniero";

// Nuevas propiedades
persona.pais = "España";
persona["estadoCivil"] = "Soltero";

// Eliminacion
delete persona.edad;
delete persona["estadoCivil"];

// Iteracion
for (let key in persona) {
  console.log(key + ": " + persona[key]);
}

const values = Object.values(persona);
console.log(values); // ["juan", 25, "Desarrollador"]

const keys = Object.keys(persona);
console.log(keys); // ["nombre", "edad", "profesion"]

const entries = Object.entries(persona);
console.log(entries); 