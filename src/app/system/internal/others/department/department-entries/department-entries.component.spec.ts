import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntriesComponent } from './department-entries.component';

describe('DepartmentEntriesComponent', () => {
  let component: DepartmentEntriesComponent;
  let fixture: ComponentFixture<DepartmentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
