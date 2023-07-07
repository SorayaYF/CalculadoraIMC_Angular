import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent {

  public animalVisivel: string = '';

  mostrarAnimal(animal: string) {
    if (this.animalVisivel === animal) {
      this.animalVisivel = '';
    } else {
      this.animalVisivel = animal;
    }
  }
}
