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

  it('Prueba para crearCalificacion(): Se espera un objeto Calificacion con los atributos ingresados', () => {
    var x1=4;
    var x2='prueba';
    expect(calificacion.crearCalificacion(x1,x2)).toEqual(
      new Calificacion(4,'prueba')
    );
  });


});
