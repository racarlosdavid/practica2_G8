import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponent } from './usuario.component';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //SEGUNDA PARTE DE PRUEBAS
  //-------------Prueba para addData() .toEqual()
  it('Caso de prueba para: addData(), se espera que el arreglo contenga 4 elementos', () => 
  {
    //Se prueba el componente con datos random
    component.addData('Nombre', 'Correo', 'Contra');

    //Se espera que el arreglo contenga el dato ingresado
    expect(component.name.length).toEqual(4);
    expect(component.cont.length).toEqual(4);
    expect(component.cor.length).toEqual(4);
  });
});
