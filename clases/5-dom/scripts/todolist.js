const tasks = [{ titulo: "Primera tarea" }, { titulo: "Segunda tarea" }];

function add(event) {
  // Prevenir recarga
  event.preventDefault();
  // Buscar el input
  const input = document.getElementById("task-input");
  // Extraer texto del input
  const texto = input.value;
  // Crear objeto de task con el texto
  const tarea = {
    titulo: texto,
  };
  // Agregar al array
  tasks.push(tarea);
  // Limpiar el input
  input.value = "";
  // Renderiza
  render();
}

function render() {
  // Obtener el div lista
  const mietiqueta = document.getElementById("lista");
  // Crear texto html para el contenido
  let content = "";
  // Recorer array
  tasks.forEach((tarea) => {
    // Concatenar a 'content' el html para la tarea
    content += `<p class="task"> ${tarea.titulo} </p>`;
  });
  // Poner contenido en mietiqueta
  mietiqueta.innerHTML = content;
  // get by id de la tarea (elemento p)
  // add event listener al 'click' de 'p'
  // En el click de p agregar una propiedad 'check: true' a la tarea
  // En el click de p agregar una clase a la tarea
}

window.onload = function () {
  render();
};
