import StackCalculator from "./stackCalculator.js";
import SafeCalCulator from "./safeCalculator.js";
import patchSafeCalculator from "./patchSafeCalc.js";
import safeCalculatorHandler from "./safeCalculatorHandler.js";

const calculator = new StackCalculator();
// calculator.putValue(3);
// calculator.putValue(3);
// console.log(calculator.multiply());
// calculator.putValue(3);
// console.log(calculator.multiply());

// const safeCalculator = new SafeCalCulator(calculator);
// calculator.putValue(3);
// calculator.putValue(2);
// console.log(calculator.multiply);

// //probamos que la instancia funcione
// safeCalculator.putValue(2);
// console.log(safeCalculator.multiply());

// calculator.putValue(0);
// console.log(calculator.divide()); //infinito

// safeCalculator.clear();

// const safeCalculator = patchSafeCalculator(calculator);
const safeCalculator = new Proxy(calculator, safeCalculatorHandler);

safeCalculator.putValue(4);
safeCalculator.putValue(0);
try {
  console.log(safeCalculator.divide()); //error
} catch (error) {
  console.error(`Error: ${error.message}`);
}
