let litros = 0;
let cap = 20;
let activo = confirm("Activar?");

if (activo) {
  alert("Empezando llenado!");
}

while (activo && litros < cap) {
  console.log("Litros: ", litros);
  litros++;
}

if (litros == cap) {
  alert("Tanque llenado con exito!");
} else {
  alert("Tanque vacio!");
}