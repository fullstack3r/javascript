// Date
const myDate = new Date();
const otherDate = new Date(2023, 05, 18);
const otherDate2 = new Date("2023-05-18");

// console.log(myDate);
// console.log(otherDate);
// console.log(otherDate2);

const year = myDate.getFullYear();
const month = myDate.getMonth();

// console.log(year);

// URL
const myUrl = new URL("https://www.ejemplo.com/ruta/subruta?page=1");

// console.log("https://www.ejemplo.com/ruta/subruta?page=1");
// console.log(myUrl.protocol)
// console.log(myUrl.host);
// console.log(myUrl.pathname);
// console.log(myUrl.search);

const parametro = myUrl.searchParams.get('page');
// console.log(parametro);


// JSON
const obj = {
  name: 'Jhon Doe',
  age: 36
};

console.log(obj);
const strObj = JSON.stringify(obj);
console.log(strObj);

const failObj = '{ "name": "Jhon Doe", "age": 36 }';
const resultObj = JSON.parse(failObj);
console.log(resultObj);



