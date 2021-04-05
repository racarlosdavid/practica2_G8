import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHabitacionComponent } from './registro-habitacion.component';
import { Habitacion } from '../../models/Habitacion.model'

describe('RegistroHabitacionComponent', () => {
  let component: RegistroHabitacionComponent;
  let fixture: ComponentFixture<RegistroHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('Pueba estado habitacion',()=>{
    
  it('deberia debolver string con leyenda + estado',() =>{
  //ARRANGE
  const habit = new Habitacion("doble","es para dos personas","libre",301,3,1200);
  //ACT
  const rta = habit.getestadohabitacion();
  //ASSERT
  expect(rta).toEqual('Habitacion en:libre');
  });
});
describe('Pueba correlativo Estado',()=>{
  
  it('deberia debolver un numero mayor a 0',() =>{
  //ARRANGE
  const habit = new Habitacion("doble","es para dos personas","libre",301,3,1200);
  //ACT
  const rta = habit.correlativoEstado("libre");
  //ASSERT
  expect(rta).toEqual(1);
  });
});
describe('RegistroHabitacion-Mock',()=>{
  class MockHabitacion extends Habitacion{
    verificarcampos():boolean{
      return true;
    }
    correlativoEstado():number{
      return 1;
    }
    getestadohabitacion():string{
      return 'Estado';
    }
  }

  let component: RegistroHabitacionComponent;
  let mockhabita:MockHabitacion;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          useClass: Habitacion
        }
      ],
      declarations: [ RegistroHabitacionComponent ]
    })
    .compileComponents();
    mockhabita = new MockHabitacion();
    component = new RegistroHabitacionComponent();
  });

  it('se espera que el metodo insertarHabitacion',()=>{
    var spia = spyOn(component,'insertarHabitacion');
    component.insertarHabitacion();
    expect(spia).toHaveBeenCalled();
    
  })
});