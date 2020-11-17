import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // Setup do módulo
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // Atribuição
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

});
