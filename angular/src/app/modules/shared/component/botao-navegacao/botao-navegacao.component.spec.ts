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

  it('Deve exibir o texto informado no botão', () => {
    component.textoBotao = 'Navegar';
    fixture.detectChanges();

    const textoBotao = getBotaoNavegacao().nativeElement
      .textContent.trim();

    expect(textoBotao).toBe('Navegar');

  });

  it('Deve emitir o evento de navegação', () => {
    jest.spyOn(component.navegar, 'emit');

    getBotaoNavegacao().triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.navegar.emit).toHaveBeenCalled();
  });

  function getBotaoNavegacao(): DebugElement {
    return fixture.debugElement.query(By.css('button'));
  }

});
