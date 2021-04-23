import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryValidatorComponent } from './department-entry-validator.component';

describe('DepartmentEntryValidatorComponent', () => {
  let component: DepartmentEntryValidatorComponent;
  let fixture: ComponentFixture<DepartmentEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
