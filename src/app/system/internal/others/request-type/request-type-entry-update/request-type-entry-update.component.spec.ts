import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryUpdateComponent } from './request-type-entry-update.component';

describe('RequestTypeEntryUpdateComponent', () => {
  let component: RequestTypeEntryUpdateComponent;
  let fixture: ComponentFixture<RequestTypeEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
