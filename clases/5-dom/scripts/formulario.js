function miSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const record = {
    name: elements.name.value,
    age: parseInt(elements.age.value),
    profession: elements.profession.value,
  };

  console.log(record);
}
