import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoConsumiblesComponent } from './nuevo-consumibles.component';

describe('NuevoConsumiblesComponent', () => {
  let component: NuevoConsumiblesComponent;
  let fixture: ComponentFixture<NuevoConsumiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoConsumiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoConsumiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
