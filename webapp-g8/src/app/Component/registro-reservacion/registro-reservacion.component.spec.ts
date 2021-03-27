import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReservacionComponent } from './registro-reservacion.component';

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
