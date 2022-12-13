const safeCalculatorHandler = {
  get: (target, property) => {
    if (property === "divide") {
      // metodo proxy
      return function () {
        // logica del metodo modificado
        const divisor = target.peekValue();
        if (divisor === 0) {
          throw Error("Division entre 0 no permitida");
        }
        return target.divide();
      };
    }

    // delegamos metodos y propiedades
    return target[property];
  },
};

export default safeCalculatorHandler;
