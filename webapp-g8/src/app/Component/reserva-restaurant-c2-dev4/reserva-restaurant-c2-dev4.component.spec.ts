import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRestaurantC2Dev4Component } from './reserva-restaurant-c2-dev4.component';

describe('ReservaRestaurantC2Dev4Component', () => {
  let component: ReservaRestaurantC2Dev4Component;
  let fixture: ComponentFixture<ReservaRestaurantC2Dev4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaRestaurantC2Dev4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaRestaurantC2Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
