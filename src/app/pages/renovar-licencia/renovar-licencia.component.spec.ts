import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovarLicenciaComponent } from './renovar-licencia.component';

describe('RenovarLicenciaComponent', () => {
  let component: RenovarLicenciaComponent;
  let fixture: ComponentFixture<RenovarLicenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovarLicenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovarLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
