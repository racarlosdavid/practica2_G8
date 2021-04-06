import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ServicioHabitacionComponent } from './servicio-habitacion.component';

describe('ServicioHabitacionComponent', () => {
  let servicio: ServicioHabitacionComponent;
  

  beforeEach(async () => {
    servicio= new ServicioHabitacionComponent();
  });

  it('Prueba para verificarCampos(): se espera true', async (()=>{
    var x1='a';
    var x2=10;
    expect (servicio.verificarCampos(x1,x2)).toEqual(true);
  }));
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

describe('ServicioHabitacionMocks', () => {
  class MockDatos extends ServicioHabitacionComponent {
    verificarCampos(valor1,valor2)
    {
      return true;
    }

    totalPedido(){
      return 44;
    }
  }

  let component: ServicioHabitacionComponent;
  let mock: MockDatos;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: MockDatos
        }
      ],
      declarations: [ ServicioHabitacionComponent ]
    })
    .compileComponents();
    
    component = new ServicioHabitacionComponent();
    mock = new MockDatos();
    
  });

  
//Prueba para verificar si se llama el verificarCampos al momento de usar el metodo agregar()
it('Caso de prueba con Mock para verficarCampos(): verificar si se llamo la funcion verificarCampos()', () => 
  {
      var spy = spyOn(mock, 'verificarCampos');
      mock.realizarPedido();
      expect(spy).toHaveBeenCalled();
  });

  it('Caso de prueba con Mock para actualizarDatos(): verificar si se muestra la alerta de total correctamente', () => 
  {
    var spy = spyOn(window, 'alert');
    mock.actualizarDatos();
    expect(spy).toHaveBeenCalledWith('Total de Q44');
  });


});