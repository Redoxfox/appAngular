import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActivosComponent } from './editar-activos.component';

describe('EditarActivosComponent', () => {
  let component: EditarActivosComponent;
  let fixture: ComponentFixture<EditarActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
