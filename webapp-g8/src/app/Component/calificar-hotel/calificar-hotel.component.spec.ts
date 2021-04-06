import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CalificarHotelComponent } from './calificar-hotel.component';
import { Calificacion } from './calificar-hotel.component';

describe('CalificarHotelComponent', () => {
  let calificacion: CalificarHotelComponent;
  
  beforeEach(async () => {
    calificacion = new CalificarHotelComponent();
  });

  it('Prueba para verificarCampos(): Se espera recibir true', () => {
    var x1=4;
    var x2='prueba';
    expect(calificacion.verificarCampos(x1,x2)).toEqual(true);
  });

  it('Prueba para verificarCampos(): Se espera recibir false', () => {
    var x1=null;
    var x2=null;
    expect(calificacion.verificarCampos(x1,x2)).toEqual(false);
  });

  it('Prueba para crearCalificacion(): Se espera un objeto Calificacion con los atributos ingresados', () => {
    var x1=4;
    var x2='prueba';
    expect(calificacion.crearCalificacion(x1,x2)).toEqual(
      new Calificacion(4,'prueba')
    );
  });


});

describe('CalificarHotelMocks', () => {
  class MockDatos extends CalificarHotelComponent {
    verificarCampos(valor1,valor2)
    {
      return false;
    }
  }

  let component: CalificarHotelComponent;
  let mock: MockDatos;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: MockDatos
        }
      ],
      declarations: [ CalificarHotelComponent ]
    })
    .compileComponents();
    mock = new MockDatos();
    component = new CalificarHotelComponent();
  });

  //Prueba para verificar que la alerta contenga el mensaje correcto
  it('Caso de prueba con Mock para calificar(): verificar si la alerta de campos vacios se muestra correctamente', () => 
  {
      var spy = spyOn(window, 'alert').and.callThrough();
      mock.calificar();
      expect(spy).toHaveBeenCalledWith('Debe ingresar una calificacion entre 1 y 5 entrellas, y debe dejar una opinion sobre el hotel');
  });



});