import { ComponentFixture, TestBed } from '@angular/core/testing';
import { user } from 'src/app/models/user';

import { RegistroUsuarioComponent } from './registro-usuario.component';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
  let fixture: ComponentFixture<RegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('RegistroUsuarioMocks', () => {
  class MockRegistroUsuarioComponent extends RegistroUsuarioComponent {
    //Le seteo un usuario para hacer las validaciones
    usuario: user = {        
      cui : 1111,              
      nombre : 'Julio',          
      apellido : 'Verne',         
      fecha_nacimiento : new Date(1828,2,8),
      correo : 'jv@gmail.com',
      contrasenia : 'pass1234'
    };
    elCUIesNumero = true;
    
    //Sobre escribo la funcion para que siempre retorne falso
    /*
    comprobarNingunCampoVacio(){
      return false;
    }
    */
    
  }

  let component: RegistroUsuarioComponent;
  let mock: MockRegistroUsuarioComponent;
  let spy:any;
  
  beforeEach(async () => {
    mock = new MockRegistroUsuarioComponent();
    component = new RegistroUsuarioComponent();
  });

  

  it('Caso de prueba con Mock para verificar si el usuario ya esta registrado', () => 
  {
      spy = spyOn(mock, 'comprobarUsuarioYaRegistrado').and.returnValue(true);
      expect(mock.comprobarUsuarioYaRegistrado()).toBeTruthy();
      
  });

  it('Caso de prueba con Mock para verificar si el usuario ya esta registrado', () => 
  {
      mock.elUsuarioExiste = true;
      expect(mock.comprobarUsuarioYaRegistrado()).toBeTruthy();
      
  });

  it('Caso de prueba con Mock para validar que no hay campos vacios, se espera true', () => 
  {   
      expect(mock.comprobarNingunCampoVacio()).toBeTrue();
  });

  it('Caso de prueba con Mock para validar que devuelve falso si hay un campo vacio, se espera false', () => 
  {   mock.usuario.fecha_nacimiento = null;
      expect(mock.comprobarNingunCampoVacio()).toBeFalse();
  });

  it('Validar el correo ingresado es valido', () => 
  {   //valido el correo jv@gmail.com 
      expect(mock.validarCorreo()).toBeGreaterThan(0);
  });

  it('Validar el correo ingresado es valido', () => 
  {   mock.usuario.correo = 'correoprueba.com'
      expect(mock.validarCorreo()).toBeLessThanOrEqual(0);
  });

  it('Validar el valor ingresado de cui es numero', () => 
  {
      mock.usuario.cui = 1234;
      expect(mock.comprobarCUIesNumero()).toBe(true);
      
  });

  it('Validar el valor ingresado de cui es numero forzar que sea falso, se espera falso', () => 
  {
    spy = spyOn(mock, 'comprobarCUIesNumero').and.returnValue(false);
    expect(mock.comprobarCUIesNumero()).toEqual(false);
      
  });

  it('Validar el valor ingresado de cui es numero, esta vez forzando a que sea falso', () => 
  {
      mock.elCUIesNumero = false;
      expect(mock.elCUIesNumero).toBe(false);
      
  });




});