import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-navegacao',
  templateUrl: './botao-navegacao.component.html'
})
export class BotaoNavegacaoComponent
  implements OnInit {

  @Input() textoBotao: string;
  @Output() navegar = new EventEmitter();

  ngOnInit(): void { }

  onNavegar(): void {
    this.navegar.emit();
  }

}
