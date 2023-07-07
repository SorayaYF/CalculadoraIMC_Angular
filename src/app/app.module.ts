import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { FormsModule } from '@angular/forms';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MenuComponent } from './menu/menu.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { InvertePipe } from './inverte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    CalculoImcComponent,
    DiretivaNgClassComponent,
    DiretivaNgForComponent,
    DiretivaNgIfComponent,
    DiretivaNgModelComponent,
    DiretivaNgStyleComponent,
    DiretivaNgSwitchComponent,
    ExemploPipesComponent,
    MenuComponent,
    MicroondasComponent,
    InvertePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
