import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHabitacionComponent } from './servicio-habitacion.component';

describe('ServicioHabitacionComponent', () => {
  let component: ServicioHabitacionComponent;
  let fixture: ComponentFixture<ServicioHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
