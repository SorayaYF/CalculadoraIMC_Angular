import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtvServiceService {
  
  public emitEvent = new EventEmitter();

  private lista: Array<{nome: string, valor: string}> = [];

  public getLista(){
    return this.lista;
  }
 
  public adiciona(nome: string, valor: string){
    this.lista.push({nome, valor});
    this.emitEvent.emit(this.lista.length);
  }
}
