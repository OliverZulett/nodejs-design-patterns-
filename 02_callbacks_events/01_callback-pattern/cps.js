// direct style
function add(num1, num2) {
  return num1 + num2;
}

//continuos passing style | sincrono
function addCPS(num1, num2, callback) {
  callback(num1 + num2);
}

console.log("empieza la ejecucion");
addCPS(3, 5, (result) => console.log(`Resultado: ${result}`));
console.log("termina la ejecucion");

//continuos passing style | asincrono
function addCPSAsync(num1, num2, callback) {
  setTimeout(() => callback(num1 + num2), 100)
}

console.log("empieza la ejecucion asincrona");
addCPSAsync(3, 5, (result) => console.log(`Resultado: ${result}`));
console.log("termina la ejecucion asincrona");

//NON - continuos passing style 
const newArray = [1, 2, 3].map(num => num - 1);
console.log(newArray);