import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListagemComponent } from './components/listagem/listagem.component';
import { ListagemService } from './services/lisagem.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,

    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListagemComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: [ListagemComponent],
  providers: [ListagemService]
})
export class ListagemModule { }
