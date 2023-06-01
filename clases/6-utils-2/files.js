const inputFile = document.getElementById("my-input");

inputFile.addEventListener("change", () => {
  const file = inputFile.files[0];
  console.log(file);

  const reader = new FileReader();
  reader.onload = (event) => {  
    console.log(reader.result);
  }
  reader.readAsText(file);
});





