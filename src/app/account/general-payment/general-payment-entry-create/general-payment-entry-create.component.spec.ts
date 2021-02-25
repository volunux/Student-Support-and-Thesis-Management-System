import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryCreateComponent } from './general-payment-entry-create.component';

describe('GeneralPaymentEntryCreateComponent', () => {
  let component: GeneralPaymentEntryCreateComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
