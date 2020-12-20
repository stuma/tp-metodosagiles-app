import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLicenciasComponent } from './lista-licencias.component';

describe('ListaLicenciasComponent', () => {
  let component: ListaLicenciasComponent;
  let fixture: ComponentFixture<ListaLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
