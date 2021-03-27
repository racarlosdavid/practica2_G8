import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroReservacionComponent } from './Component/registro-reservacion/registro-reservacion.component'
import { RegistroHabitacionComponent } from './Component/registro-habitacion/registro-habitacion.component'
import { Logindev2Component } from './Component/logindev2/logindev2.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },*/
  {path: '', component: Logindev2Component}, 
  {
    path:'RegistroReservacion',
    component: RegistroReservacionComponent
  },
  {
    path:'RegistroHabitacion',
    component:RegistroHabitacionComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
