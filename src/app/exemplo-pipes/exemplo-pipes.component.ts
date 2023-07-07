import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {

  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";

}
