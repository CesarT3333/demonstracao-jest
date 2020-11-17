import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BuscadorCepComponent } from './components/buscador-cep/buscador-cep.component';
import { ViaCepService } from './services/via-cep/via-cep.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,

    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      { path: '', component: BuscadorCepComponent }
    ])
  ],
  declarations: [BuscadorCepComponent],
  providers: [ViaCepService]
})
export class BuscadorCepModule { }
