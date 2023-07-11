import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpAComponent } from './cp-a/cp-a.component';
import { CpBComponent } from './cp-b/cp-b.component';
import { CpAgrupadorComponent } from './cp-agrupador/cp-agrupador.component';



@NgModule({
  declarations: [
    CpAComponent,
    CpBComponent,
    CpAgrupadorComponent,
  ],
  imports: [
    CommonModule
  ]
}) 
export class MdServiceModule { }
