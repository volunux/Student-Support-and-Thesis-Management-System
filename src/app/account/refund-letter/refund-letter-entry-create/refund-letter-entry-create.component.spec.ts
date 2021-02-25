import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundLetterEntryCreateComponent } from './refund-letter-entry-create.component';

describe('RefundLetterEntryCreateComponent', () => {
  let component: RefundLetterEntryCreateComponent;
  let fixture: ComponentFixture<RefundLetterEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundLetterEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundLetterEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
