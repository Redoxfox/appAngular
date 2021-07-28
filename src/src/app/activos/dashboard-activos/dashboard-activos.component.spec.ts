import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActivosComponent } from './dashboard-activos.component';

describe('DashboardActivosComponent', () => {
  let component: DashboardActivosComponent;
  let fixture: ComponentFixture<DashboardActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
