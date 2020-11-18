import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTitularComponent } from './alta-titular.component';

describe('AltaTitularComponent', () => {
  let component: AltaTitularComponent;
  let fixture: ComponentFixture<AltaTitularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTitularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
