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

  const mispan = document.getElementById("mispan");
  mispan.addEventListener("mouseover", () => {
    mispan.classList.add("rect-border");
  });
  mispan.addEventListener("mouseout", () => {
    mispan.classList.remove("rect-border");
  });
  mispan.addEventListener("click", () => {
    mispan.classList.toggle("rect-border");
  });
};
