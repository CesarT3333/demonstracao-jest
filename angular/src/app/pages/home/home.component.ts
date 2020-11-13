import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ templateUrl: './home.component.html' })
export class HomeComponent {

  title = 'angular';

  constructor(
    private router: Router
  ) { }

  onNavegarParaListagem(): void {
    this.router.navigate(['listagem']);
  }

  onNavegarParaBuscadorCep(): void {
    this.router.navigate(['buscador-cep']);
  }

}
