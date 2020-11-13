import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ViaCepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  buscaCep(cep: string): Observable<any> {

    if (!cep || !cep.match(/^\d{5}-\d{3}$/)) {
      throw new Error(`Cep inválido: ${cep}`);
    }

    return this.httpClient.get(
      `http://viacep.com.br/ws/${cep.replace('-', '')}/json`
    );

  }

}
