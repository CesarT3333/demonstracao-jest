const Calculadora = require('./calculadora');

describe('Calculadora =>', () => {

  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  describe('Soma', () => {
    it('deve somar 1 + 2 e resultar 3',
      () => expect(calculadora.sum(1, 2)).toBe(3));
  });

});