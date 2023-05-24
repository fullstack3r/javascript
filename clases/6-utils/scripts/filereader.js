const inputFile = document.getElementById("file");
let image;

inputFile.addEventListener("change", (event) => {
  const file = inputFile.files[0];

  const reader = new FileReader();
  reader.onload = (event) => {
    image = reader.result;
    const imageElement = document.createElement("img");
    document.body.appendChild(imageElement);
    imageElement.src = image;
    console.log(image);
  };
  // reader.readAsText(file);
  reader.readAsDataURL(file);
});
