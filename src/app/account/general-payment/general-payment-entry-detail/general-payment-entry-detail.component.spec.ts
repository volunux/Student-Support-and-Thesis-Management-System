import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryDetailComponent } from './general-payment-entry-detail.component';

describe('GeneralPaymentEntryDetailComponent', () => {
  let component: GeneralPaymentEntryDetailComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
