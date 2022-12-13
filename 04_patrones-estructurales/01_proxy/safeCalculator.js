export default class SafeCalCulator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  //procy metodo
  divide() {
    // en este metodo vlidamos la divicion entre 0
    const divisor = this.calculator.peekValue();
    if (divisor === 0) {
      throw Error("Division entre 0 no permitida");
    }
    return this.calculator.divide();
  }

  // hacemos un wrapper para cada metodo
  putValue(value) {
    return this.calculator.putValue(value);
  }

  getValue() {
    return this.calculator.getValue();
  }

  peekValue() {
    return this.calculator.peekValue();
  }

  clear() {
    return this.calculator.clear();
  }

  multiply() {
    return this.calculator.multiply();
  }
}
