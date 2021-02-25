import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryStudentDetailComponent } from './request-entry-student-detail.component';

describe('RequestEntryStudentDetailComponent', () => {
  let component: RequestEntryStudentDetailComponent;
  let fixture: ComponentFixture<RequestEntryStudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryStudentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
