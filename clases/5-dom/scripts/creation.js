const content = document.getElementById("content");
const btn = document.getElementById("boton");

const miElemento = document.createElement("span");
miElemento.textContent = "Hola este es mi span";

btn.addEventListener("click", () => {
  const hasChild = content.hasChildNodes();
  console.log(hasChild);
  if (!hasChild) {
    content.appendChild(miElemento);
  } else {
    content.removeChild(miElemento);
    miElemento.remove();
  }
});
