import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeBecaComponent } from './consulta-de-beca.component';

describe('ConsultaDeBecaComponent', () => {
  let component: ConsultaDeBecaComponent;
  let fixture: ComponentFixture<ConsultaDeBecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaDeBecaComponent]
    });
    fixture = TestBed.createComponent(ConsultaDeBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
