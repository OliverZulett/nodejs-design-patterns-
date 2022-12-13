export default function pathCalculator(calculator) {
  // metodo nuevo
  calculator.add = function () {
    const addend2 = this.getValue();
    const addend1 = this.getValue();
    const result = addend1 + addend2;
    this.putValue(result);
    return result;
  };

  // metodo modificado
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
