import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroReservacionComponent } from './Component/registro-reservacion/registro-reservacion.component';
import { RegistroHabitacionComponent } from './Component/registro-habitacion/registro-habitacion.component';
import { Logindev2Component } from './Component/logindev2/logindev2.component';
import { RecuperarContraseniaComponent } from './Component/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroUsuarioComponent } from './Component/registro-usuario/registro-usuario.component';
import { LimpiezaC1Dev4Component } from './Component/limpieza-c1-dev4/limpieza-c1-dev4.component';
import { ReservaRestaurantC2Dev4Component } from './Component/reserva-restaurant-c2-dev4/reserva-restaurant-c2-dev4.component';
import { SolicitarValetC3Dev4Component } from './Component/solicitar-valet-c3-dev4/solicitar-valet-c3-dev4.component';
import { PagoOnlineComponent } from './Component/pago-online/pago-online.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroReservacionComponent,
    RegistroHabitacionComponent,
    Logindev2Component,
    AppComponent,
    RecuperarContraseniaComponent,
    RegistroUsuarioComponent,
    LimpiezaC1Dev4Component,
    ReservaRestaurantC2Dev4Component,
    SolicitarValetC3Dev4Component
    RegistroUsuarioComponent,
    PagoOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
