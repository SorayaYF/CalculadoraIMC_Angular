import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent {
  contador: number = 4;
  nomeSelecionado: string = "";
  classificacaoSelecionada: number = 0;
  nomeFilme: string = "";
  classificacaoFilme: string = "";

  public listaFilmes: any = [
    { nome: "Filme 1", classificacao: 'Livre' },
    { nome: "Filme 2", classificacao: 16 },
    { nome: "Filme 3", classificacao: 10 }
  ];

  public addFilme() {
    if (this.nomeFilme && this.classificacaoFilme) {
      this.listaFilmes.push({ nome: this.nomeFilme, idade: this.classificacaoFilme });
      this.nomeFilme = "";
      this.classificacaoFilme = "";
      this.contador++;
      this.nomeSelecionado = '';
    }
  }

  public removeFilme() {
    this.listaFilmes.pop();
    this.contador--;
    this.nomeSelecionado = '';
  }

  public clickFilme(p: any) {
    console.log(p);
    this.nomeSelecionado = p.nome;
    this.classificacaoSelecionada = p.classificacao;
  }
}
