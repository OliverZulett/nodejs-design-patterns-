import createTimer from "./timerFactory.js";

function getFibonacciNumbers(intNumber) {
  const timer = createTimer(`Buscando todos los # fibonacci de ${intNumber}`);

  timer.start();

  let fibArray = [0, 1];
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= intNumber; i++) {
    fibArray.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  timer.end();

  return fibArray;
}

// function getAllFactors(intNumber) {
//   const profiler = createSessionHandler(`Finding all factors of ${intNumber}`);
//   profiler.sessionStarts();
//   const factors = [];
//   for (let factor = 2; factor < intNumber; factor++) {
//     while (intNumber % factor === 0) {
//       factors.push(factor);
//       intNumber = intNumber / factor;
//     }
//   }
//   profiler.sessionEnds();

//   return factors;
// }

const myNumber = process.argv[2];
// const myFactors = getAllFactors(myNumber);
const myFibonaccis = getFibonacciNumbers(myNumber);

// console.log(`Factors of ${myNumber} are: `, myFactors);
console.log(`Los numeros fibonacci de ${myNumber} son:`, myFibonaccis);
