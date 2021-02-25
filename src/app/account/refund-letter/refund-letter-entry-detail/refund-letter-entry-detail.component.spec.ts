import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundLetterEntryDetailComponent } from './refund-letter-entry-detail.component';

describe('RefundLetterEntryDetailComponent', () => {
  let component: RefundLetterEntryDetailComponent;
  let fixture: ComponentFixture<RefundLetterEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundLetterEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundLetterEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
