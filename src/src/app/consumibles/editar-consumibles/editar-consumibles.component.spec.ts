import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsumiblesComponent } from './editar-consumibles.component';

describe('EditarConsumiblesComponent', () => {
  let component: EditarConsumiblesComponent;
  let fixture: ComponentFixture<EditarConsumiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConsumiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsumiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
