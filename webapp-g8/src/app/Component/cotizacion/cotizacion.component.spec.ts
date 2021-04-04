import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CotizacionComponent } from './cotizacion.component';
import { Articulo } from './cotizacion.component';

describe('CotizacionComponent', () => {
  let component: CotizacionComponent;
  

  beforeEach(async () => {
    component= new CotizacionComponent();
  });

  it('Prueba para verificarCampos(): Se espera recibir false', async (()=>{
    var x1=null;
    var x2=0;
    var x3=0;
    expect (component.verificarCampos(x1,x2,x3)).toEqual(false);
  }));

  it('Prueba para calcularSubTotal(): El subTotal debe ser 44', async (()=>{
    var x1:number=11;
    var x2:number=4;
    
    expect (component.calcularsubTotal(x1,x2)).toEqual(44);
  }));

  it('Prueba para sumarSubtotales(): El total debe ser 4444', async (()=>{
    var datos: Articulo[] = [
      new Articulo("Articulo1", 250,1,component.calcularsubTotal(250,1)),
      new Articulo("Articulo2", 25,4,component.calcularsubTotal(25,4)),
      new Articulo("Articulo3", 47,2,component.calcularsubTotal(47,2)),
      new Articulo("Articulo4", 500,8,component.calcularsubTotal(500,8)),
    ];
    
    expect (component.sumaSubtotales(datos)).toEqual(4444);
  }));

});

describe('CotizacionMocks', () => {
  class MockDatos extends CotizacionComponent {
    verificarCampos(valor1,valor2,valor3)
    {
      return true;
    }
    sumaSubtotales(){
      return 100;
    }  
  }

  let component: CotizacionComponent;
  let mock: MockDatos;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: MockDatos
        }
      ],
      declarations: [ CotizacionComponent ]
    })
    .compileComponents();
    mock = new MockDatos();
    component = new CotizacionComponent();
  });

  
//Prueba para verificar si se llama el verificarCampos al momento de usar el metodo agregar()
it('Caso de prueba con Mock para verficarCampos(): verificar si se llamo la funcion verificarCampos()', () => 
  {
      var spy = spyOn(mock, 'verificarCampos');
      mock.agregar();
      expect(spy).toHaveBeenCalled();
  });

  //Prueba para verificar que la alerta contenga el mensaje correcto
  it('Caso de prueba con Mock para mostrarTotal(): verificar si la alerta con el total se muestra correctamente', () => 
  {
      var spy = spyOn(window, 'alert').and.callThrough();
      mock.mostrarTotal();
      expect(spy).toHaveBeenCalledWith('El total es de Q100');
  });



});