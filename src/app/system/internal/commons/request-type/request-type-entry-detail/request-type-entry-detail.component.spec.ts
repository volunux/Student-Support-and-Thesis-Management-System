import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryDetailComponent } from './request-type-entry-detail.component';

describe('RequestTypeEntryDetailComponent', () => {
  let component: RequestTypeEntryDetailComponent;
  let fixture: ComponentFixture<RequestTypeEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
