function onClick(event) {
  event.stopImmediatePropagation();
  console.log("Boton!");
  // const target = event.target;
  // console.log(target);
}

function cambiarTexto(event, texto) {
  const target = event.target;
  target.innerText = texto;
}

function log(event, text) {
  console.log(event, text);
}

function onKey(event, text) {
  console.log(text);
}

function validate(event) {
  const key = event.key;
  const allow = [
    "Backspace", 
    "Delete",
    "ArrowLeft",
    "ArrowRight"
  ];

  if (isNaN(key) && !allow.includes(key)) {
    event.preventDefault();
  }
}
