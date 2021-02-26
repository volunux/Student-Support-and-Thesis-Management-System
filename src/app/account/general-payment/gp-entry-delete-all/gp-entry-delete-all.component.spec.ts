import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryDeleteAllComponent } from './gp-entry-delete-all.component';

describe('GeneralPaymentEntryDeleteAllComponent', () => {
  let component: GeneralPaymentEntryDeleteAllComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
