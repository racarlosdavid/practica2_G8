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

  it('Prueba para verificarCubiertos(valor:string), se espera recibir un valor false', async (() => {
    expect(reservacion.verificarCubiertos('Seleccione')).toEqual(false); 
  }));

  it('Prueba para verificarDia(valor:string), se espera recibir un valor false', async (() => {
    expect(reservacion.verificarDia('Día')).toEqual(false); 
  }));

  it('Prueba para verificarDia(valor:string), se espera recibir un valor true', async (() => {
    expect(reservacion.verificarDia('15')).toEqual(true); 
  }));

  it('Prueba para verificarMes(valor:string), se espera recibir un valor false', async (() => {
    expect(reservacion.verificarMes('Mes')).toEqual(false); 
  }));

  it('Prueba para verificarMes(valor:string), se espera recibir un valor true', async (() => {
    expect(reservacion.verificarMes('5')).toEqual(true); 
  }));

  it('Prueba para verificarAnio(valor:string), se espera recibir un valor false', async (() => {
    expect(reservacion.verificarAnio('Año')).toEqual(false); 
  }));

  it('Prueba para verificarAnio(valor:string), se espera recibir un valor true', async (() => {
    expect(reservacion.verificarAnio('2021')).toEqual(true); 
  }));

  it('Prueba para verificarHora(valor:string), se espera recibir un valor true', async(() =>{
    expect(reservacion.verificarHora('11:00')).toEqual(true);
  }));

  it('Prueba para verificarHora(valor:string), se espera recibir un valor false', async(() =>{
    expect(reservacion.verificarHora('Seleccione')).toEqual(false);
  }));
       
 it('Prueba para verificarCampos(), se espera un valor true', async(() =>{
    reservacion.verificarCubiertos('4')
    reservacion.verificarDia('15')
    reservacion.verificarMes('6')
    reservacion.verificarAnio('2021')
    reservacion.verificarHora('11:00')
    expect(reservacion.verificarCampos()).toBeTrue()
 }))

 it('Prueba para verificarCampos(), se espera un valor false', async(() =>{
  reservacion.verificarCubiertos('Seleccione')
  reservacion.verificarDia('15')
  reservacion.verificarMes('6')
  reservacion.verificarAnio('2021')
  reservacion.verificarHora('11:00')
  expect(reservacion.verificarCampos()).toBeFalse()
}))

it('Prueba para reservar(), se espera recibir un valor true', async(() =>{
  reservacion.verificarCubiertos('4')
  reservacion.verificarDia('15')
  reservacion.verificarMes('6')
  reservacion.verificarAnio('2021')
  reservacion.verificarHora('11:00')
  expect(reservacion.reservar()).toEqual(true);
}));

it('Prueba para reservar(), se espera recibir un valor false', async(() =>{
  reservacion.verificarCubiertos('Seleccione')
  reservacion.verificarDia('15')
  reservacion.verificarMes('6')
  reservacion.verificarAnio('2021')
  reservacion.verificarHora('11:00')
  expect(reservacion.reservar()).toEqual(false);
}));

});

describe('ReservarMesaMocks', () =>{
  class MockReserva extends ReservaRestaurantC2Dev4Component { 
   reservar(){
      return true
    }
  }

  let component: ReservaRestaurantC2Dev4Component;
  let mock: MockReserva;

 beforeEach(async () => {
   await TestBed.configureTestingModule({
     providers: [
       {
         useClass: MockReserva
       }
     ],
     declarations: [ ReservaRestaurantC2Dev4Component ]
   })
   .compileComponents();
   mock = new MockReserva();
   component = new ReservaRestaurantC2Dev4Component();
 });

 it('Caso de prueba con Mock para reservar(): verificar si se llamo la funcion reservar()', () => 
 {
     var spy = spyOn(mock, 'reservar');
     mock.reservar();
     expect(spy).toHaveBeenCalled();
 });

})
