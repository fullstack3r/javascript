function onClick(event) {
  console.log("Hice click!", event);
}

function showPassword() {
  const input = document.getElementById("mi-input");
  const type = input.getAttribute("type");

  if (type === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}

window.onload = function () {
  const showButton = document.getElementById("show-button");
  showButton.addEventListener("click", showPassword);

  /////////////

  const mispan = document.getElementById("mispan");

  // mispan.classList.add
  // mispan.classList.remove
  // mispan.classList.toggle

  mispan.addEventListener("mouseover", () => {
    mispan.classList.add("rect-border");
  });

  mispan.addEventListener("mouseout", () => {
    mispan.classList.remove("rect-border");
  });

  const miButton = document.getElementById("boton");
  miButton.addEventListener("click", () => {
    mispan.classList.toggle("rect-border");
  });
};
