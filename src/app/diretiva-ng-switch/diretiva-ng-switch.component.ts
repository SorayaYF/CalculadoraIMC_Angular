import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.scss']
})
export class DiretivaNgSwitchComponent {
  
  public listaPaises: string[] = ['Brasil', 'Estados Unidos', 'Japão'];
  public paisSelecionado: string = '';

  constructor() { }


}
