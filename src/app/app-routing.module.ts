import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CpPaiComponent as CpFilhoPaiComponent } from './md-filho-pai/cp-pai/cp-pai.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atv-modulo/cp-tela/cp-tela.component';

const routes: Routes = [
  {path: 'binding', component: ExemploBindingComponent},
  {path: 'imc', component: CalculoImcComponent},
  {path: 'ngClass', component: DiretivaNgClassComponent},
  {path: 'ngFor', component: DiretivaNgForComponent},
  {path: 'ngIf', component: DiretivaNgIfComponent},
  {path: 'ngModel', component: DiretivaNgModelComponent},
  {path: 'ngStyle', component: DiretivaNgStyleComponent},
  {path: 'ngSwitch', component: DiretivaNgSwitchComponent},
  {path: 'pipes', component: ExemploPipesComponent},
  {path: 'microondas', component: MicroondasComponent},
  {path: 'paiFilho', component: CpPaiComponent},
  {path: 'filhoPai', component: CpFilhoPaiComponent},
  {path: 'serviceAgrupador', component: CpAgrupadorComponent},
  {path: 'atvTela', component: CpTelaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
