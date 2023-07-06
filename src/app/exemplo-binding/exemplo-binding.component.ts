import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "";

  public incrementa5() {
    this.n1 += 5;
    this.n2 += 5;
  }

  public decrementa5() {
    this.n1 -= 5;
    this.n2 -= 5;
  }

  public urlImg(): string {
    if (this.n1 + this.n2 > 50) {
      return "https://cdn-icons-png.flaticon.com/512/4989/4989793.png"
    } else {
      return "https://cdn-icons-png.flaticon.com/512/5372/5372211.png"
    }

  }

}
