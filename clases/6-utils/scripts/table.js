const projects = [];

function render() {
  const tableBody = document.getElementById("content");
  tableBody.innerHTML = "";

  projects.forEach((project, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${project.name}</td>
        <td>${project.description}</td>
        <td>${project.status}</td>
    `;
    tableBody.appendChild(tr);
  });
}

window.onload = function () {
  render();
};

// ##  Tasks ##
// Agregar imagen de proyecto al item
// Mostar fecha de creacion
// Cargar proyectos desde el navegador
