// Preguntar si quiere cafe
let want = confirm("Quieres cafe?");

if (want) {
  // Preguntar si hay cafe
  let coffe = confirm("hay cafe?");

  // Si hay cafe, calentar y si no hay cafe, hacer
  if (coffe) {
    alert("Calentando cafe...");
  } else {
    a("Haciendo cafe...");
  }

  // Servir cafe
  alert("Sirviendo cafe...");

  // Añadir azucar al cafe
  let sugar = false;
  while (!sugar) {
    sugar = confirm("Esta bien de azucar?");
  }

  // Tomar cafe
  alert("Cafe listo para tomar!");
} else {
  alert("hasta luego!");
}
