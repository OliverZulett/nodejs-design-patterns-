import StackCalculator from "./stackCalculator.js";
import EnhancedCalculator from "./EnhancedCalculator.js";
import pathCalculator from "./patchCalculator.js";
import enhancedCalculatorHandler from "./enhancedCalculatorHandler.js";

const calculator = new StackCalculator();
// const enhancedCalculator = new EnhancedCalculator(calculator);
// const enhancedCalculator = pathCalculator(calculator);
const enhancedCalculator = new Proxy(calculator, enhancedCalculatorHandler);

enhancedCalculator.putValue(4);
enhancedCalculator.putValue(3);
console.log(enhancedCalculator.add());
enhancedCalculator.putValue(2);
console.log(enhancedCalculator.multiply());
