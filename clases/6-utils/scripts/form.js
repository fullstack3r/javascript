const projects = [];

function formValues() {
  const form = document.getElementById("project-form");
  const elements = form.elements;

  const values = {
    name: elements.name.value,
    description: elements.description.value,
    responsible: elements.responsible.value,
    status: elements.status.value || "pending",
  };

  if (values.name === "" || values.responsible === "") {
    return null;
  }

  return values;
}

function createProject(event) {
  event.preventDefault();

  const project = formValues();
  if (!project) {
    alert("Faltaron campos obligatorios!");
    return;
  }

  projects.push(project);
  form.reset();
}

function deleteProject(i) {
  projects.splice(i, 1);
}
