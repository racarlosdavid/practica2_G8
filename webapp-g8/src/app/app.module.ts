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

@NgModule({
  declarations: [
    AppComponent,
    RegistroReservacionComponent,
    RegistroHabitacionComponent,
    Logindev2Component
    AppComponent,
    RecuperarContraseniaComponent
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
