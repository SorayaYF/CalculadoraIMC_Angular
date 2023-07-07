import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent {
  public largura: number = 100;
  public larguraStr: string = "100px";
  public posicao: number = 0;
  public posicaoStr: string = "0px";

  acelerar() {
    this.largura += 20;
    this.larguraStr = this.largura + "px";
    this.posicao += 50;
    this.posicaoStr = this.posicao + "px";
  }

  desacelerar() {
    if (this.largura > 20) {
      this.largura -= 20;
      this.larguraStr = this.largura + "px";
      this.posicao -= 50;
      this.posicaoStr = this.posicao + "px";
    }
  }
}
