import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: ()=>import('./inicio/inicio.module').then(m=>m.InicioModule),
 },
  {
    path: 'personaje',
    loadChildren: ()=>import('./rickoso/rickoso.module').then(m=>m.RickosoModule),
 },
 {
    path: '**',
    redirectTo: 'inicio',
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
