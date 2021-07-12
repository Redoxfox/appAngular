import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPerifericosComponent } from './dashboard-perifericos.component';

describe('DashboardPerifericosComponent', () => {
  let component: DashboardPerifericosComponent;
  let fixture: ComponentFixture<DashboardPerifericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPerifericosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPerifericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
