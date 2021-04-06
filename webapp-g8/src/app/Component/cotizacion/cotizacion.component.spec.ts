import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CotizacionComponent } from './cotizacion.component';
import { Articulo } from './cotizacion.component';
import { MatTable } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';

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

  it('Prueba para verificarCampos(): Se espera recibir true', async (()=>{
    var x1='a';
    var x2=10;
    var x3=20;
    expect (component.verificarCampos(x1,x2,x3)).toEqual(true);
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

  it('Prueba para crearArticulo(): Debe retornar un objeto Articulo con los datos indicados', async (()=>{
    expect (component.crearArticulo("Articulo1", 1,1,1)).toEqual(
      new Articulo("Articulo1", 1,1,1)
    );
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
    renderizarColumnas(){
      return true;
    }
    confirmaBorrar(){
      return true;
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
    
    component = new CotizacionComponent();
    mock = new MockDatos();
    
  });

  
//Prueba para verificar si se llama el verificarCampos al momento de usar el metodo agregar()
it('Caso de prueba con Mock para verficarCampos(): verificar si se llamo la funcion verificarCampos()', () => 
  {
      var spy = spyOn(mock, 'verificarCampos');
      mock.agregar();
      expect(spy).toHaveBeenCalled();
  });

  it('Caso de prueba con Mock para renderizarColumnas(): verificar si se llamo la funcion renderizarColumnas()', () => 
  {
      var spy = spyOn(mock, 'renderizarColumnas');
      mock.agregar();
      expect(spy).toHaveBeenCalled();
  });

  it('Caso de prueba con Mock para confirmaBorrar(): verificar si se llamo la funcion confirmaBorrar()', () => 
  {
      var spy = spyOn(mock, 'confirmaBorrar');
      mock.borrarFila(1);
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