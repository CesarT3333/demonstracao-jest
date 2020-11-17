import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ListagemService } from '../../services/lisagem.service';

@Component({ templateUrl: './listagem.component.html' })
export class ListagemComponent
  implements OnInit {

  private _enderecos: Array<Endereco> = [];

  constructor(
    private listagemService: ListagemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.buscaEnderecos();
  }

  onNavegar(): void {
    this.location.back();
  }

  private buscaEnderecos(): void {
    this.listagemService.buscaEnderecos()
      .subscribe(enderecos => this._enderecos = enderecos);
  }

  get enderecos(): Array<Endereco> {
    return this._enderecos;
  }

}

export interface Endereco {
  logradouro: string;
  cidade: string;
  cep: string;
}
