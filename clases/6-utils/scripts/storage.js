const localValue = localStorage.getItem("test");
console.log(localValue);
if (!localValue) {
  localStorage.setItem("test", "Hola esto es un test");
  console.log("Valor guardado en local!");
}

const sessionValue = sessionStorage.getItem("test");
console.log(sessionValue);
if (!sessionValue) {
  sessionStorage.setItem("test", "Hola esto es un test");
  console.log("Valor guardado en session!");
}
