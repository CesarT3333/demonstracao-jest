import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListagemComponent } from './components/listagem/listagem.component';
import { ListagemService } from './services/lisagem.service';

@NgModule({
  imports: [
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
