let usuario1 = {
  nombre: "Manuel",
  edad: 128,
  asistio: false,
  datos: {
    nota: 0,
    tiempoEstudio: 9,
  },
};

let usuario2 = {
  nombre: "Jorge",
  edad: 45,
  asistio: true,
  datos: {
    nota: 70,
    tiempoEstudio: 9,
  },
};
console.log(miobjeto);

function getNameOrDefault(parametro) {
  if (parametro.asistio) {
    return parametro.name;
  }

  return "no aplica";
}

let resultado1 = getNameOrDefault(usuario1);
let resultado2 = getNameOrDefault(usuario2);
