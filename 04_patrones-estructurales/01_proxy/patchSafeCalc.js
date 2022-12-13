export default function patchSafeCalculator(calculator) {
  const divideOrigin = calculator.divide;
  calculator.divide = () => {
    // en este metodo vlidamos la divicion entre 0
    const divisor = calculator.peekValue();
    if (divisor === 0) {
      throw Error("Division entre 0 no permitida");
    }
    // si la division no es entre cero
    return divideOrigin.apply(calculator);
  };

  return calculator;
}
