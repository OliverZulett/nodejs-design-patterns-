export function patchSafeCalculator(calculator) {
  const divideOriginal = calculator.divide;
  calculator.divide = () => {
    const divisor = calculator.peekValue();
    if (divisor === 0) {
      throw Error("Division entre 0 no este permitida");
    }
    return divideOriginal.apply(calculator);
  };

  return calculator;
}
