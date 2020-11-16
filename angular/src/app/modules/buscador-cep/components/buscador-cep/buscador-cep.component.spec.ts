import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ViaCepService } from '../../services/via-cep/via-cep.service';
import { BuscadorCepComponent } from './buscador-cep.component';

describe('BuscadorCepComponent =>', () => {

  let fixture: ComponentFixture<BuscadorCepComponent>;
  let component: BuscadorCepComponent;

  let viaCepService: ViaCepService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [BuscadorCepComponent],
      providers: [ViaCepService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorCepComponent);
    component = fixture.componentInstance;

    viaCepService = TestBed.get(ViaCepService);

    fixture.detectChanges();
  });

  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

  describe('Dado que meu formulário é inválido', () => {

    it('Deve conter erros de validação', () => {
      getCepFormControl().setValue('123');
      fixture.detectChanges();

      expect(component.formBuscadorCep.invalid).toBeTruthy();
      expect(getCepFormControl().errors.minlength).toBeTruthy();

      getCepFormControl().setValue('9099999999999999');
      fixture.detectChanges();

      expect(component.formBuscadorCep.invalid).toBeTruthy();
      expect(getCepFormControl().errors.maxlength).toBeTruthy();

    });

  });

  describe('Dado que meu formulário é válido', () => {

    beforeEach(() => {
      jest.spyOn(viaCepService, 'buscaCep');
    });

    it('Deve submeter o formulário', () => {
      getCepFormControl().setValue('95013-000');
      fixture.detectChanges();

      expect(component.formBuscadorCep.valid).toBeTruthy();
      expect(getCepFormControl().errors).toBeFalsy();

      component.onFormSubmit();
      fixture.detectChanges();

      expect(viaCepService.buscaCep).toHaveBeenCalledWith('95013-000');

    });

  });


  function getCepFormControl(): FormControl {
    return <FormControl>component.formBuscadorCep.get('cep');
  }

});
