function getNumbers() {
  const strNumeros = localStorage.getItem("numeros");
  if (strNumeros) {
    return JSON.parse(strNumeros);
  }

  return [];
}

function setNumbers() {
  const strNumeros = JSON.stringify(numeros);
  localStorage.setItem("numeros", strNumeros);
}

function add() {
  const minumero = parseInt(Math.random() * 100);
  numeros.push(minumero);
  setNumbers();
}

function remove() {
  numeros.pop();
  if (numeros.length > 0) {
    setNumbers();
  } else {
    localStorage.removeItem('numeros');
  }
}

function show() {
  console.table(numeros);
}

const numeros = getNumbers();

