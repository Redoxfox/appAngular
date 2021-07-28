import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsumiblesComponent } from './dashboard-consumibles.component';

describe('DashboardConsumiblesComponent', () => {
  let component: DashboardConsumiblesComponent;
  let fixture: ComponentFixture<DashboardConsumiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConsumiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsumiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
