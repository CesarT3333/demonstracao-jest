import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  /**
   * Setup do módulo
   *
   * Sempre executar o primeiro beforeEach dentro de uma função 'async'
   * para abrigar a configuração do módulo do elemento a ser testado;
   *
   * @see https://angular.io/guide/testing-components-scenarios#the-async-beforeeach
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // Atribuição
  beforeEach(() => {
    // Cria o "debugger" para o componente
    fixture = TestBed.createComponent(AppComponent);
    // Recupera a instancia do componente
    component = fixture.debugElement.componentInstance;
  });

  // Teste de fumaça
  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

});
