import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReservacionComponent } from './registro-reservacion.component';
import { Reserva } from '../../models/Reserva.model'

describe('RegistroReservacionComponent', () => {
  let component: RegistroReservacionComponent;
  let fixture: ComponentFixture<RegistroReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('Prueba verificar campos Reservacion',()=>{
  it('deberia devolver true',() =>{
    //ARRANGE
    const reser = new Reserva("doble","2021","2021",3,12);
    //ACT
    const rta = reser.veficarcampos();
    //ASSERT
    expect(rta).toBeTrue();
  });
});
describe('Prueba veficiar Fechas Reservacion',()=>{
  it('deberia devolver true',()=>{
    //ARRANGE
    const reser = new Reserva("doble","2021-03-12","2021-03-19",0,0);
    //ACT
    const rta = reser.verificarfechas();
    //ASSERT
    expect(rta).toBeTrue();
  });
});
describe('Prueba veficiar Fechas Reservacion false',()=>{
  it('deberia devolver false',()=>{
    //ARRANGE
    const reser = new Reserva("doble","2021-03-19","2021-03-12",0,0);
    //ACT
    const rta = reser.verificarfechas();
    //ASSERT
    expect(rta).toBeFalse();
  });
});
describe('Prueba verificar campos Reservacion False',()=>{
  it('deberia devolver false',() =>{
    //ARRANGE
    const reser = new Reserva("","2021","2021",3,12);
    //ACT
    const rta = reser.veficarcampos();
    //ASSERT
    expect(rta).toBeFalse();
  });
});
describe('Prueba verificar cantidad de personas',()=>{
  it('deberia devolver la cantidad 3',() =>{
    //ARRANGE
    const reser = new Reserva("","2021","2021",3,12);
    //ACT
    const rta = reser.verificarCantidadPersonas();
    //ASSERT
    expect(rta).toEqual(3);
  });
});
describe('RegistroReservacion-Mock',()=>{
  class MockReserva extends Reserva{
    veficarcampos():boolean{
      return true;
    }
    verificarfechas():boolean{
      return true;
    }
    verificarCantidadPersonas():number{
      return 4;
    }
  }

  let component: RegistroReservacionComponent;
  let mockreservacion:MockReserva;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: MockReserva
        }
      ],
      declarations: [ RegistroReservacionComponent ]
    })
    .compileComponents();
    mockreservacion = new MockReserva();
    component = new RegistroReservacionComponent();
  });

  it('se espera que el metodo verificarCantidadPersonas',()=>{
    var spia = spyOn(component,'insertarReserva');
    component.insertarReserva();
    expect(spia).toHaveBeenCalled();
    
  })
});
