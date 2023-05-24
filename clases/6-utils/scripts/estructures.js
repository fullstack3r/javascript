// Fechas
const fechaActual = new Date(); // Crear una fecha actual
const fechaEspecifica = new Date(2023, 1, 1); // Crear una fecha específica

fechaActual.getFullYear(); // Obtener el año actual
fechaActual.getMonth(); // Obtener el mes actual (0-11)
fechaActual.getDate(); // Obtener el día del mes (1-31)
fechaActual.getHours(); // Obtener las horas (0-23)
fechaActual.getMinutes(); // Obtener los minutos (0-59)
fechaActual.getSeconds(); // Obtener los segundos (0-59)
fechaActual.getDay(); // Obtener el día de la semana (0-6, donde 0 es domingo)
fechaActual.toString(); // Obtener una representación de cadena de la fecha
fechaActual.toLocaleDateString(); // Obtener la fecha en formato localizado
fechaActual.toLocaleTimeString(); // Obtener la hora en formato localizado

// JSON
const obj = {
  name: "Manuel",
  role: "maestro",
  age: 30,
};
console.log(obj);

const strObj = JSON.stringify(obj);
console.log(strObj);

const parsedObj = JSON.parse(strObj);
console.log(parsedObj);

// URL
const url = new URL(
  "http://localhost:5500/clases/6-utils/index.html?casa=1&type=image"
);

console.log('url.href: ', url.href);
console.log('url.pathname: ', url.pathname);
console.log('url.search: ', url.search);
console.log('url.host: ', url.host);
console.log('Casa: ', url.searchParams.get('casa'))
console.log('Tipo: ', url.searchParams.get('type'))

// RexExp
const texto = "Hola, esto es un texto!";
const reg = new RegExp("texto");

const testResult = reg.test(texto);
console.log(testResult);

const matchResult = texto.match(reg);
console.log(matchResult);

const replaceResult = texto.replace(reg, "saludo");
console.log(replaceResult);

// File
function checkFile() {
  const fileInput = document.getElementById("image");
  const archivo = fileInput.files[0];
  console.log(archivo.name); // Nombre del archivo
  console.log(archivo.size); // Tamaño del archivo en bytes
  console.log(archivo.type); // Tipo MIME del archivo
  console.log(archivo.lastModified); // Fecha de la última modificación del archivo
}

// Set
// Map
// Math
