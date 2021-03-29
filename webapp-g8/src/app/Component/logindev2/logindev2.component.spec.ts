import { Component } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { Observable, of } from 'rxjs';
import { Logindev2Component } from './logindev2.component';

//Pruebas con funciones simples
describe('Logindev2Component', () => {
  let component: Logindev2Component;
  let fixture: ComponentFixture<Logindev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        }
      ],
      declarations: [ Logindev2Component ]
    })
    .compileComponents();
  });

  //Inicializo la instancia dentro de beforeEach
    //Este componente permite llamar a todo lo que tengamos publico en nuestro componente
    //Login1 inicializa un router por lo que enviaremos un parámetro null
  beforeEach(() => {
    fixture = TestBed.createComponent(Logindev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Cada caso de prueba se escribe con la palabra it
  //Primero recibe un string con la descripción de la prueba, luego un callback para la prueba unitaria
  it('La variable title debe contener el nombre -Login1-', () => 
  {
    //Variable que va a amacenar el resultado del component.title
    let mivariable : string = component.title;
    
    //Para evaluar se coloca el expect
    //expect(Mi_variable) es igual a 'Pruebas'
    expect(mivariable).toEqual('Login1');
  });
  //-------------Prueba para llamado de Verificarbusqueda() .toHaveBeenCalled()
  it('Caso de prueba para: Verificarbusqueda(), se espera que sea llamado el método', () => 
  {
    //Espía
    let llamado = spyOn(component, 'Verificarbusqueda');
    
    //Ejecución del método
    component.Verificarbusqueda('Prueba');

    expect(llamado).toHaveBeenCalled();
  });
  //-------------Prueba para Capturatipo() .no.toBe()
  it('Caso de prueba para: Capturatipo(), se espera que el tipo de usuario no sea null', () =>
  {
    //Variable de prueba
    let tipouser = component.tipouser;

    //Ejecución del método
    component.Capturatipo();
    tipouser = component.opselected;

    //Luego de la ejecución del método el tipouser debe cambiar sí o sí
    expect(tipouser).not.toBe('');
  });
  //-------------Prueba para Verificarbusqueda() .toBe()
  it('Caso de prueba para: Verificarbusqueda(), se espera recibir "Búsqueda exitosa"', () => 
  {
    //Parámetros para la función
    let param1: string = 'planes';
    //Variable de control
    let resultado: string = 'Búsqueda exitosa';

    expect(component.Verificarbusqueda(param1)).toBe(resultado);
  });
  //-------------Prueba para Verifcamposllenos() .toBeFalsy()
  it('Caso de prueba para: Verifcamposllenos(), se espera recibir falso', () =>
  {
    expect(component.Verifcamposllenos('', '')).toBeFalsy();
  });
  //-------------Prueba para Veriftipousuario() toHaveBeenCalledWith()
  it('Caso de prueba para Veriftipousuario(), se espera una alerta con mensaje específico por usuario inválido', () =>
  {
    //Objeto espía
    var spy = spyOn(window, 'alert').and.callThrough();

    //Se prueba el componente con tipo de usuario inválido
    let s = component.Veriftipousuario('0');

    //Se espera respuesta de alerta
    expect(spy).toHaveBeenCalledWith("Debe seleccionar un tipo de usuario");
  });
  //-------------Prueba para Verifadmi() .toBeThruty
  it('Caso de prueba para Verifadmi(), se espera recibir true', () => 
  {
    expect(component.Verifadmi('admin', '1234')).toBeTruthy();
  });
});
