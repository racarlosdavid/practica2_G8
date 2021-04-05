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

  it('validar el campo correo se espera un false, si el campo tiene un correo', () => {
    expect(component.validadCampoVacio("racarlosdavid@gmail.com")).toBeFalse();
  });

});
