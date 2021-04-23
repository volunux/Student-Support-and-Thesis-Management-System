import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryUpdateComponent } from './department-entry-update.component';

describe('DepartmentEntryUpdateComponent', () => {
  let component: DepartmentEntryUpdateComponent;
  let fixture: ComponentFixture<DepartmentEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
