// import { createUser } from "./userFactory.js";

import createTimer from "./sessionFactory.js";

// const newUser = createUser('user_1');
// console.log(newUser.getName());
// newUser.setName('user_2')
// console.log(newUser.getName());

// try {
//   const userWithoutName = createUser();
// } catch (error) {
//   console.error(error.message)
// }

function getFibonacciNumbers(intNumber) {
  const timer = createTimer(`Buscando toslos los # fibonacci de ${intNumber}`);

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

const myNumber = process.argv[2];
const myFabonaccis = getFibonacciNumbers(myNumber);

console.log(`Les numeros fibonacci de ${myNumber} son: `, myFabonaccis);
