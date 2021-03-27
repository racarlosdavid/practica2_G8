import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroReservacionComponent } from './Component/registro-reservacion/registro-reservacion.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'RegistroReservacion',
    component: RegistroReservacionComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
