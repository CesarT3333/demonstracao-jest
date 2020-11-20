import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { of } from 'rxjs';

import { mockLstagemEnderecos } from 'src/app/test/mocks/listagem-enderecos.mock';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ListagemService } from '../../services/lisagem.service';
import { ListagemComponent } from './listagem.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListagemComponent =>', () => {

  let fixture: ComponentFixture<ListagemComponent>;
  let component: ListagemComponent;

  let listagemServiceSpy: ListagemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ListagemComponent],
      providers: [ListagemService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;

    listagemServiceSpy = TestBed.get(ListagemService);

    // Delega o método buscarEnderecos retornar uma listagem fake
    jest.spyOn(listagemServiceSpy, 'buscaEnderecos')
      .mockReturnValue(of(mockLstagemEnderecos));

    fixture.detectChanges();
  });

  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

  it('Deve fazer a busca de endereços', () => {
    expect(listagemServiceSpy.buscaEnderecos).toHaveBeenCalled();
    expect(listagemServiceSpy.buscaEnderecos).toHaveBeenCalledTimes(1);
  });

  it('Deve exibir os dados na listagem', () => {

    // Busca linhas da tabela
    const linhasDaTabela = fixture.debugElement.queryAll(By.css('tr'));

    // verifica se a quantidade de linhas bate com a quantidade de registros
    expect(linhasDaTabela).toHaveLength(4);

    const linha_1 = linhasDaTabela[0];
    const colunasLinha_1 = linha_1.queryAll(By.css('th'));

    // Testa conteúdo dos títulos das colulas
    expect(getTextContent(colunasLinha_1[0])).toBe('CEP');
    expect(getTextContent(colunasLinha_1[1])).toBe('Cidade');
    expect(getTextContent(colunasLinha_1[2])).toBe('Logradouro');

    const linha_2 = linhasDaTabela[1];
    const colunasLinha_2 = linha_2.queryAll(By.css('td'));

    // Testa conteúdo dos interno das colunas
    expect(getTextContent(colunasLinha_2[0])).toBe('95012000');
    expect(getTextContent(colunasLinha_2[1])).toBe('Caxias do Sul');
    expect(getTextContent(colunasLinha_2[2])).toBe('Rua Júlio de castilhos');

  });

  function getTextContent(debugElement: DebugElement): string {
    return debugElement.nativeElement.textContent.trim();
  }

});
