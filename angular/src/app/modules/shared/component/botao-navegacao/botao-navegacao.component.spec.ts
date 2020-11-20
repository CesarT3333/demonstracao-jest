import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BotaoNavegacaoComponent } from './botao-navegacao.component';

describe('BotaoNavegacaoComponent =>', () => {

  let fixture: ComponentFixture<BotaoNavegacaoComponent>;
  let component: BotaoNavegacaoComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoNavegacaoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

  // Testa se texto do botão é o mesmo texto passado via @Input no componente
  it('Deve exibir o texto informado no botão', () => {
    component.textoBotao = 'Navegar';
    fixture.detectChanges();

    const textoBotao = getBotaoNavegacao().nativeElement
      .textContent.trim();

    expect(textoBotao).toBe('Navegar');

  });

  it('Deve emitir o evento de navegação', () => {
    // Mocka o event emit do EventEmitter do pacote @angular/core
    jest.spyOn(component.navegar, 'emit');

    getBotaoNavegacao().triggerEventHandler('click', null);
    fixture.detectChanges();

    // Testa se o evento está sendo chamado após clicar no botão
    expect(component.navegar.emit).toHaveBeenCalled();
  });

  function getBotaoNavegacao(): DebugElement {
    // Query necessária para buscar a tag <button> dentro do template
    return fixture.debugElement.query(By.css('button'));
  }

});
