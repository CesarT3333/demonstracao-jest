const sum = require('./sum');

describe('sum', () => {

  describe('Dado que meus parametros são inválidos', () => {

    it('deve retornar erro de validação', () => {

      const mensagemErroEsperada = 'parametros devem ser do tipo number';

      expect(() => sum('ddddd', 'asdasd2')).toThrow(mensagemErroEsperada);
      expect(() => sum(null, '2')).toThrow(mensagemErroEsperada);

    });

  });

  describe('Dado que meus parametros são válidos', () => {

    it('deve somar 1 + 2 e resultar 3',
      () => expect(sum(1, 2)).toBe(3));

  });

});