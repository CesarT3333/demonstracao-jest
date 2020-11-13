import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ViaCepService } from './via-cep.service';

describe('ViaCepService =>', () => {

  let viaCepService: ViaCepService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViaCepService]
    }).compileComponents();

    viaCepService = TestBed.get(ViaCepService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('Deve requisitar cep informado', () => {
    const cepMock = '95013-000';
    const retornoEsperado = { cep: cepMock };

    viaCepService.buscaCep(cepMock)
      .subscribe(retorno => {
        expect(retorno).toEqual(retornoEsperado);
      });

    const req = httpTestingController
      .expectOne(`http://viacep.com.br/ws/95013000/json`);

    expect(req.request.method).toEqual('GET');
    req.flush(retornoEsperado);

  });

  describe('Dado que o cep informado não seja válido', () => {

    it('Deve retornar erro de validação', () => {
      const mensagemEsperada = 'Cep inválido:';

      expect(() => viaCepService.buscaCep(null))
        .toThrowError(`${mensagemEsperada} null`);

      expect(() => viaCepService.buscaCep(undefined))
        .toThrowError(`${mensagemEsperada} undefined`);

      expect(() => viaCepService.buscaCep('11111111111111111111111'))
        .toThrowError(`${mensagemEsperada} 11111111111111111111111`);

      expect(() => viaCepService.buscaCep('0'))
        .toThrowError(`${mensagemEsperada} 0`);

    });

  });


});
