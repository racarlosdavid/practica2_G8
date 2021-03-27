import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaC1Dev4Component } from './limpieza-c1-dev4.component';

describe('LimpiezaC1Dev4Component', () => {
  let component: LimpiezaC1Dev4Component;
  let fixture: ComponentFixture<LimpiezaC1Dev4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiezaC1Dev4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaC1Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
