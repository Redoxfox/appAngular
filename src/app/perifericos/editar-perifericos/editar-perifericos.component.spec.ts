import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerifericosComponent } from './editar-perifericos.component';

describe('EditarPerifericosComponent', () => {
  let component: EditarPerifericosComponent;
  let fixture: ComponentFixture<EditarPerifericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerifericosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerifericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
