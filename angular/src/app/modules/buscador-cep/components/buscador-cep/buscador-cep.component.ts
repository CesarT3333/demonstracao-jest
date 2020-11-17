import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';

import { ViaCepService } from '../../services/via-cep/via-cep.service';

@Component({
  templateUrl: './buscador-cep.component.html'
})
export class BuscadorCepComponent
  implements OnInit {

  formBuscadorCep: FormGroup;

  constructor(
    private viaCepService: ViaCepService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  }

  onNavegar(): void {
    this.location.back();
  }

  onFormSubmit(): void {
    if (this.formBuscadorCep.valid) {

      this.viaCepService.buscaCep(this.formBuscadorCep.value.cep)
        .pipe(map(responseViaCep => JSON.stringify(responseViaCep)))
        .subscribe(alert);

    } else {
      alert('Cep não pode ser nulo');
    }
  }

  private criaFormulario(): void {
    this.formBuscadorCep =
      this.formBuilder.group({
        cep: [
          null,
          [
            // 99999-999
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(9)
          ]
        ]
      });
  }
}
