import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { TituloComponent } from './components/titulo/titulo.component';


@NgModule({
  declarations: [
    InicioComponent,
    TituloComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
