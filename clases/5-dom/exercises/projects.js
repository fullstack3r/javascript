var registerBtn;
var currentIndex;
var updateBtn = document.createElement("button");
updateBtn.textContent = "Actualizar";
updateBtn.classList.add("btn-update");
updateBtn.setAttribute("type", "button");
updateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  editProject(currentIndex);
});

function createProject(event) {
  event.stopImmediatePropagation();
  event.preventDefault();

  const form = event.target;
  const elements = form.elements;

  const project = {
    name: elements.name.value,
    description: elements.description.value,
    responsible: elements.responsible.value,
    status: elements.status.value,
  };

  if (
    project.name === "" ||
    project.responsible === "" ||
    project.status === ""
  ) {
    alert("Faltaron campos obligatorios!");
    return;
  }

  projects.push(project);
  form.reset();
  render();
}

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

function deleteProject(i) {
  projects.splice(i, 1);
  render();
}

function editProject(i) {
  const form = document.getElementById("project-form");
  const elements = form.elements;
  const project = projects[i];

  project.name = elements.name.value;
  project.description = elements.description.value;
  project.responsible = elements.responsible.value;
  project.status = elements.status.value;

  form.removeChild(updateBtn);
  form.appendChild(registerBtn);
  currentIndex = null;
  
  form.reset();
  render();
}

function toEditProject(i) {
  const form = document.getElementById("project-form");
  const elements = form.elements;
  const project = projects[i];

  elements.name.value = project.name;
  elements.description.value = project.description;
  elements.responsible.value = project.responsible;
  elements.status.value = project.status;
  currentIndex = i;
  registerBtn = document.getElementById("btn-submit");
  form.removeChild(registerBtn);
  form.appendChild(updateBtn);
}

////
const projects = [
  {
    name: "Project 1",
    description: "Description 1",
    responsible: "User 1",
    status: "in-progress",
  },
  {
    name: "Project 2",
    description: "Description 2",
    responsible: "User 2",
    status: "canceled",
  },
];

window.onload = function () {
  render();
};
