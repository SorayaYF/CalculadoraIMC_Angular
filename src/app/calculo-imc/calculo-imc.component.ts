import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {
  public peso!: number;
  public altura!: number;
  public imc!: number;
  public sexo: string = '';
  public avaliacao: string = '';

  isButtonDisabled(): boolean {
    return this.peso <= 0 || this.altura <= 0 || this.sexo == '';
  }

  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.sexo === "masculino") {
      if (this.imc < 20.7) {
        this.avaliacao = "Abaixo do peso";
      } else if (this.imc < 26.4) {
        this.avaliacao = "Peso normal";
      } else if (this.imc < 27.8) {
        this.avaliacao = "Marginalmente acima do peso";
      } else if (this.imc < 31.1) {
        this.avaliacao = "Acima do peso ideal";
      } else {
        this.avaliacao = "Obeso";
      }
    } else if (this.sexo === "feminino") {
      if (this.imc < 19.1) {
        this.avaliacao = "Abaixo do peso";
      } else if (this.imc < 25.8) {
        this.avaliacao = "Peso normal";
      } else if (this.imc < 27.3) {
        this.avaliacao = "Marginalmente acima do peso";
      } else if (this.imc < 32.3) {
        this.avaliacao = "Acima do peso ideal";
      } else {
        this.avaliacao = "Obeso";
      }
    }
  }
}
