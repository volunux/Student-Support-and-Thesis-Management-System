import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFormInputComponent } from './department-form-input.component';

describe('DepartmentFormInputComponent', () => {
  let component: DepartmentFormInputComponent;
  let fixture: ComponentFixture<DepartmentFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
