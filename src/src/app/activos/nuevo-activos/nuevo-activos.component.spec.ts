import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoActivosComponent } from './nuevo-activos.component';

describe('NuevoActivosComponent', () => {
  let component: NuevoActivosComponent;
  let fixture: ComponentFixture<NuevoActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
