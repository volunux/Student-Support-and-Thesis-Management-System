import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryDeleteComponent } from './department-entry-delete.component';

describe('DepartmentEntryDeleteComponent', () => {
  let component: DepartmentEntryDeleteComponent;
  let fixture: ComponentFixture<DepartmentEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
