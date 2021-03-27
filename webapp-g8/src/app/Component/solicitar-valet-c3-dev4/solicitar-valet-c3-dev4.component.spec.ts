import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarValetC3Dev4Component } from './solicitar-valet-c3-dev4.component';

describe('SolicitarValetC3Dev4Component', () => {
  let component: SolicitarValetC3Dev4Component;
  let fixture: ComponentFixture<SolicitarValetC3Dev4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarValetC3Dev4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarValetC3Dev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
