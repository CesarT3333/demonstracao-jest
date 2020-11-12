class Calculadora {

  sum(a, b) {
    if (!a || !b || isNaN(a) || isNaN(b)) {
      throw new Error('parametros devem ser do tipo number');
    }

    return a + b;
  }

  /// ...

}

module.exports = Calculadora;