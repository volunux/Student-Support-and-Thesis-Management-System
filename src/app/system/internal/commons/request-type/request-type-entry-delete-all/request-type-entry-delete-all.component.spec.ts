import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryDeleteAllComponent } from './request-type-entry-delete-all.component';

describe('RequestTypeEntryDeleteAllComponent', () => {
  let component: RequestTypeEntryDeleteAllComponent;
  let fixture: ComponentFixture<RequestTypeEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
