import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ReservaRestaurantC2Dev4Component } from './reserva-restaurant-c2-dev4.component';

describe('Reservar mesa', () => {
  let component: ReservaRestaurantC2Dev4Component;
  let fixture: ComponentFixture<ReservaRestaurantC2Dev4Component>;
  let reservacion: ReservaRestaurantC2Dev4Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaRestaurantC2Dev4Component ]
    })
    .compileComponents();
    reservacion = new ReservaRestaurantC2Dev4Component();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaRestaurantC2Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prueba para verificarCubiertos(valor:string), se espera recibir un valor true', async (() => {
    expect(reservacion.verificarCubiertos('5')).toEqual(true); 
  }));

  it('Prueba para verificarHora(valor:string), se espera recibir un valor true', async(() =>{
    expect(reservacion.verificarHora('11:00')).toEqual(true);
  }));
       
 it('Prueba para verificarCampos(), se espera un valor true', async(() =>{
    reservacion.verificarCubiertos('4')
    reservacion.verificarDia('15')
    reservacion.verificarMes('6')
    reservacion.verificarAnio('2021')
    reservacion.verificarHora('11:00')
    expect(reservacion.verificarCampos()).toBeTrue()
 }))

});
