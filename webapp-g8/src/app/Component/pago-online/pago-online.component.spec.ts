import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoOnlineComponent } from './pago-online.component';

describe('PagoOnlineComponent', () => {
  let component: PagoOnlineComponent;
  let fixture: ComponentFixture<PagoOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Calcular el 50% de descuento de 4500 se espera 2250', () => {
    expect(component.aplicarDescuento(4500,50)).toBeLessThan(4500);
  });

  it('Calcular el total por una habitcion de 700 por 2 noches, se espera 1400', () => {
    expect(component.calcularTotal(700,2)).toEqual(1400);
  });

  it('Varificar que el codigo 700 es valido ya que debe contener 3 digitos, se espera true', () => {
    expect(component.validarCodigoCVV(700)).toBeTrue();
  });
});
