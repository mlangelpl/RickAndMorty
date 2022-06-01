import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BarraComponent } from './components/barra/barra.component';
import { TituloComponent } from './components/titulo/titulo.component';


@NgModule({
  declarations: [
    InicioComponent,
    BarraComponent,
    TituloComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
