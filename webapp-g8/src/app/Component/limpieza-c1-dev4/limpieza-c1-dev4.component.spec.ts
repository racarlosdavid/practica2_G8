import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { LimpiezaC1Dev4Component } from './limpieza-c1-dev4.component';

describe('LimpiezaC1Dev4Component', () => {
  let component: LimpiezaC1Dev4Component;
  let fixture: ComponentFixture<LimpiezaC1Dev4Component>;
  let limpieza: LimpiezaC1Dev4Component

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiezaC1Dev4Component ]
    })
    .compileComponents();
    limpieza = new LimpiezaC1Dev4Component()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaC1Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prueba para asignarEmpleado(valor:string), se espera recibir un valor true', async (() => {
    expect(limpieza.asignarEmpleado('Luisa')).toEqual(true); 
  }));

  it('Prueba para asignarEmpleado(valor:string), se espera recibir un valor false', async (() => {
    expect(limpieza.asignarEmpleado('Seleccione')).toEqual(false); 
  }));

  it('Prueba para cambiarEstado(), se espera recibir un valor false', async (() => {
    limpieza.checkboxValue = false
    expect(limpieza.cambiarEstado()).toEqual(false); 
  }));

  it('Prueba para cambiarEstado(), se espera recibir un valor true', async (() => {
    limpieza.checkboxValue = true
    expect(limpieza.cambiarEstado()).toEqual(true); 
  }));

  
});
