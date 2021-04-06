import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaComponent } from './recuperar-contrasenia.component';

describe('RecuperarContraseniaComponent', () => {
  let component: RecuperarContraseniaComponent;
  let fixture: ComponentFixture<RecuperarContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarContraseniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('validar el correo racarlosdavid@gmail.com se espera un valor mayor a 0 si el correo es valido', () => {
    expect(component.validarCorreo("racarlosdavid@gmail.com")).toBeGreaterThan(0);
  });

  it('validar el correo racarlosdavid@gmail.com se espera un  0, si el correo no es valido', () => {
    expect(component.validarCorreo("racarlos")).toEqual(0);
  });

  it('validar el campo correo se espera un false, si el campo tiene un correo', () => {
    expect(component.validadCampoVacio("racarlosdavid@gmail.com")).toBeFalse();
  });

  it('validar el campo correo se espera un true, si el campo esta vacio', () => {
    expect(component.validadCampoVacio(undefined)).toBeTrue();
  });


});

describe('RcuperarContraseniaMocks', () => {
  class MockRecuperarContraseniaComponent extends RecuperarContraseniaComponent {
    usermail="";
  }

  let component: RecuperarContraseniaComponent;
  let mock: MockRecuperarContraseniaComponent;
  let spy:any;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: MockRecuperarContraseniaComponent
        }
      ],
      declarations: [ RecuperarContraseniaComponent ]
    })
    .compileComponents();
    mock = new MockRecuperarContraseniaComponent();
    component = new RecuperarContraseniaComponent();
  });

  it('Caso de prueba con Mock para verificar mensaje de alerta, correo enviado', () => 
  {
      mock.usermail = 'correodeprueba@gmail.com';
      spy = spyOn(window, 'alert').and.callThrough();
      mock.enviarPassPorEmail();
      expect(spy).toHaveBeenCalledWith("Se enviara una contrasenia temporal a correodeprueba@gmail.com");
   
  });

  it('Caso de prueba con Mock para verificar mensaje de alerta, error correo no ingresado', () => 
  {
      mock.usermail = undefined;
      spy = spyOn(window, 'alert').and.callThrough();
      mock.enviarPassPorEmail();
      expect(spy).toHaveBeenCalledWith("Ingrese correo para recuperar la contraseña");
   
  });

});