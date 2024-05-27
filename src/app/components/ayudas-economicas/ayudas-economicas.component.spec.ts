import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudasEconomicasComponent } from './ayudas-economicas.component';

describe('AyudasEconomicasComponent', () => {
  let component: AyudasEconomicasComponent;
  let fixture: ComponentFixture<AyudasEconomicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyudasEconomicasComponent]
    });
    fixture = TestBed.createComponent(AyudasEconomicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
