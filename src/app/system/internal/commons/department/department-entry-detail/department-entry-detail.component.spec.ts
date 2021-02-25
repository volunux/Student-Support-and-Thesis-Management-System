import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryDetailComponent } from './department-entry-detail.component';

describe('DepartmentEntryDetailComponent', () => {
  let component: DepartmentEntryDetailComponent;
  let fixture: ComponentFixture<DepartmentEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
