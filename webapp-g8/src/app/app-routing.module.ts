import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroReservacionComponent } from './Component/registro-reservacion/registro-reservacion.component'
import { RegistroHabitacionComponent } from './Component/registro-habitacion/registro-habitacion.component'
import { Logindev2Component } from './Component/logindev2/logindev2.component';
import { RecuperarContraseniaComponent } from './Component/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroUsuarioComponent } from './Component/registro-usuario/registro-usuario.component';
import { LimpiezaC1Dev4Component } from './Component/limpieza-c1-dev4/limpieza-c1-dev4.component'
import { ReservaRestaurantC2Dev4Component } from './Component/reserva-restaurant-c2-dev4/reserva-restaurant-c2-dev4.component';
import { SolicitarValetC3Dev4Component } from './Component/solicitar-valet-c3-dev4/solicitar-valet-c3-dev4.component'
import { PagoOnlineComponent } from './Component/pago-online/pago-online.component';
import { CotizacionComponent } from './Component/cotizacion/cotizacion.component';


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
  },
  {
    path: 'recuperarContrasenia',
    component : RecuperarContraseniaComponent
  },
  {
    path: 'registrarUsuario',
    component : RegistroUsuarioComponent
  },
  {
    path:'limpieza',
    component: LimpiezaC1Dev4Component
  },
  {
    path:'reservaRestaurant',
    component: ReservaRestaurantC2Dev4Component
  },
  {
    path:'solicitarValet',
    component: SolicitarValetC3Dev4Component
  },
  {
    path: 'pagoOnline',
    component : PagoOnlineComponent
  },
  {
    path: 'cotizacion',
    component : CotizacionComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
