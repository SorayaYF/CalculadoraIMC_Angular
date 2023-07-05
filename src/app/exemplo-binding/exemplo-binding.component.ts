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
      return "https://i.pinimg.com/originals/3a/93/9e/3a939ed5a67ea28b52771fc9d9f67c88.png"
    } else {
      return "https://i.pinimg.com/564x/48/80/9b/48809b84353e9aebef7b6f3d7c3e1263.jpg"
    }

  }

}
