import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Endereco } from '../components/listagem/listagem.component';

@Injectable()
export class ListagemService {

  buscaEnderecos(): Observable<Array<Endereco>> {
    return of([]);
  }

}
