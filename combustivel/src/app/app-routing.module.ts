import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombustivelComponent } from './combustivel/combustivel.component';

import { HomeComponent } from "./home/home.component";
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent
  },
  {
    path: "combustivel",
    component: CombustivelComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
