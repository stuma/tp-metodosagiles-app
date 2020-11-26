import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirLicenciaComponent } from './emitir-licencia.component';

describe('EmitirLicenciaComponent', () => {
  let component: EmitirLicenciaComponent;
  let fixture: ComponentFixture<EmitirLicenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirLicenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
