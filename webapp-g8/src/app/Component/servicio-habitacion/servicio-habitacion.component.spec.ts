import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ServicioHabitacionComponent } from './servicio-habitacion.component';

describe('ServicioHabitacionComponent', () => {
  let servicio: ServicioHabitacionComponent;
  

  beforeEach(async () => {
    servicio= new ServicioHabitacionComponent();
  });

  it('Prueba para verificarCampos(): se espera false', async (()=>{
    var x1=null;
    var x2=0;
    expect (servicio.verificarCampos(x1,x2)).toEqual(false);
  }));

  it('Prueba para totalPedido(): se espera 44', async (()=>{
    var x1=22;
    var x2=2;
    expect (servicio.totalPedido(x1,x2)).toEqual(44);
  }));

});