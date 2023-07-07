import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-model',
  templateUrl: './diretiva-ng-model.component.html',
  styleUrls: ['./diretiva-ng-model.component.scss']
})
export class DiretivaNgModelComponent {

  public nome: string = "";
  public nomes: Array<{ nome: string }> = [];

  adicionaNome() {
    if (this.nome != 'X') {
      this.nomes.push({ nome: this.nome });
      this.nome = "";
    }
  }

}
