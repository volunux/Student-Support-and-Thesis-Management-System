import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryUserSignatureComponent } from './refund-entry-user-signature.component';

describe('RefundEntryUserSignatureComponent', () => {
  let component: RefundEntryUserSignatureComponent;
  let fixture: ComponentFixture<RefundEntryUserSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryUserSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryUserSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
