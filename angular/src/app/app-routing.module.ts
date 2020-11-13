import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';

const loadListagem = () =>
  import('./modules/listagem/listagem.module')
    .then(mod => mod.ListagemModule);

const loadBuscadorCep = () =>
  import('./modules/buscador-cep/buscador-cep.module')
    .then(mod => mod.BuscadorCepModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listagem', loadChildren: loadListagem },
  { path: 'buscador-cep', loadChildren: loadBuscadorCep }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
