import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EChartComponent } from './e-chart.component';

describe('EChartComponent', () => {
  let component: EChartComponent;
  let fixture: ComponentFixture<EChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EChartComponent]
    });
    fixture = TestBed.createComponent(EChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
