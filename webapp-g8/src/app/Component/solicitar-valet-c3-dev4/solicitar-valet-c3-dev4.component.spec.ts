import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SolicitarValetC3Dev4Component } from './solicitar-valet-c3-dev4.component';

describe('SolicitarValetC3Dev4Component', () => {
  let component: SolicitarValetC3Dev4Component;
  let fixture: ComponentFixture<SolicitarValetC3Dev4Component>;
  let solicitud: SolicitarValetC3Dev4Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarValetC3Dev4Component ]
    })
    .compileComponents();
    solicitud = new SolicitarValetC3Dev4Component();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarValetC3Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prueba para verificarHoraLlegada(valor:string), se espera el valor true', async(() =>{
    expect(solicitud.verificarHoraLlegada('12:00')).toEqual(true)
  }));
  
  it('Prueba para verificarHoraSalida(valor:string), se espera el valor true', async(() =>{
    expect(solicitud.verificarHoraSalida('11:00')).toEqual(true)
  }));

  it('Prueba para verificarCamposLlegada(), se espera el valor true', async(() => {
    (<HTMLInputElement>document.getElementById("numeroReservacion")).value = '25'
    solicitud.verificarHoraLlegada('12:00')
    expect(solicitud.verificarCamposLlegada()).toEqual(true)
  }));

  it('Prueba para verificarCamposSalida(), se espera el valor true', async(() => {
    (<HTMLInputElement>document.getElementById("numeroHabitacion")).value = '25'
    solicitud.verificarHoraSalida('11:00')
    expect(solicitud.verificarCamposSalida()).toEqual(true)
  }));

  it('Prueba para solicitarLlegada(), se espera el valor true', async(() => {
    (<HTMLInputElement>document.getElementById("numeroReservacion")).value = '25'
    solicitud.verificarHoraLlegada('12:00')
    expect(solicitud.solicitarLlegada()).toEqual(true)
  }));

  it('Prueba para solicitarSalida(), se espera el valor true', async(() => {
    (<HTMLInputElement>document.getElementById("numeroHabitacion")).value = '25'
    solicitud.verificarHoraSalida('11:00')
    expect(solicitud.solicitarSalida()).toEqual(true)
  }));
});
