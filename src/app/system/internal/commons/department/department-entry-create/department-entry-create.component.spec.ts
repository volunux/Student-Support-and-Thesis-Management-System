import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryCreateComponent } from './department-entry-create.component';

describe('DepartmentEntryCreateComponent', () => {
  let component: DepartmentEntryCreateComponent;
  let fixture: ComponentFixture<DepartmentEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
