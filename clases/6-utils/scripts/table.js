const projects = [];

function render() {
  const tableBody = document.getElementById("projects");
  tableBody.innerHTML = "";

  projects.forEach((project, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${project.name}</td>
        <td>${project.description}</td>
        <td>${project.responsible}</td>
        <td>${project.status}</td>
        <td>
          <button class="btn-mini" onclick="toEditProject(${i})"> 🪛 </button>
          <button class="btn-mini" onclick="deleteProject(${i})"> ✖️ </button>
        </td>
    `;
    tableBody.appendChild(tr);
  });
}

window.onload = function () {
  render();
};