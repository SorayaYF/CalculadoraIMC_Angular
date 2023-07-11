import { Component, OnInit } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit {

  public qt!: number;

  constructor(private service: AtvServiceService) { }

  public addItem(nome: string, valor: string) {
    return this.service.adiciona(nome, valor);
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err: number) => this.qt = 0,
    })
  }
}
