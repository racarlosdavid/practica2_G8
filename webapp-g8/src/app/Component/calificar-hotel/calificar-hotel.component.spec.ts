import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarHotelComponent } from './calificar-hotel.component';

describe('CalificarHotelComponent', () => {
  let component: CalificarHotelComponent;
  let fixture: ComponentFixture<CalificarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
