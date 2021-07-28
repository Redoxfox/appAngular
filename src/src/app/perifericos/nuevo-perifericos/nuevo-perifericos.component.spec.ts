import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPerifericosComponent } from './nuevo-perifericos.component';

describe('NuevoPerifericosComponent', () => {
  let component: NuevoPerifericosComponent;
  let fixture: ComponentFixture<NuevoPerifericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPerifericosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPerifericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
