import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryDeleteAllComponent } from './department-entry-delete-all.component';

describe('DepartmentEntryDeleteAllComponent', () => {
  let component: DepartmentEntryDeleteAllComponent;
  let fixture: ComponentFixture<DepartmentEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
