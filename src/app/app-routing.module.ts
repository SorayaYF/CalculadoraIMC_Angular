import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';

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
  {path: 'microondas', component: MicroondasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
