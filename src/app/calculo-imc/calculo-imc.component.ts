import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {

  public peso: number = 0;
  public altura: number = 0;
  public imc: number = 0;

  isButtonDisabled(): boolean {
    return this.peso <= 0 || this.altura <= 0;
  }
  
  calcularIMC(){

    this.imc = this.peso / (this.altura * this.altura);

  }

}
