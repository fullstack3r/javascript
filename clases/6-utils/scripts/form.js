const stringProjects = localStorage.getItem('projects');
const objProjects = JSON.parse(stringProjects);
const projects = objProjects;

var currentImage = '';


function formValues() {
  const form = document.getElementById("project-form");
  const elements = form.elements;

  const values = {
    name: elements.name.value,
    createdAt: elements.createdAt.value,
    description: elements.description.value,
    status: elements.status.value || "pending",
    cover: currentImage,
  };

  if (values.name === "") {
    return null;
  }

  return values;
}

function createProject(event) {
  event.preventDefault();
  debugger;
  const project = formValues();
  if (!project) {
    alert("Faltaron campos obligatorios!");
    return;
  }
  projects.push(project);

  resetForm();
  saveLocal();
}

function saveLocal() {
  const strProjects = JSON.stringify(projects);
  localStorage.setItem('projects', strProjects);
}

function resetForm(){
  const form = document.getElementById("project-form");
  const projectImg = document.getElementById("project-image");
  projectImg.src = '/assets/images/no-image.png';
  currentImage = null;
  form.reset();
}

function setImgSrc(file) {
  const reader = new FileReader();
  const projectImg = document.getElementById("project-image");
  reader.onload = (event) => {
    projectImg.src = event.target.result;
    currentImage = event.target.result;
  };
  reader.readAsDataURL(file);
}

window.onload = function () {
  const coverInput = document.getElementById("cover");
  coverInput.addEventListener("change", (event) => {
    const file = coverInput.files[0];
    setImgSrc(file);
  });
};

// ##  Tasks ##
// Agregar imagen a proyecto ✅
// Añadir fecha de creacion ✅
// Almacenar proyectos en el navegador ✅
