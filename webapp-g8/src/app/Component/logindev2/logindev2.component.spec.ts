import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logindev2Component } from './logindev2.component';

describe('Logindev2Component', () => {
  let component: Logindev2Component;
  let fixture: ComponentFixture<Logindev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logindev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Logindev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
