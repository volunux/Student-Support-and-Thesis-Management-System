import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSignatureEntryDeleteAllComponent } from './refund-signature-entry-delete-all.component';

describe('RefundSignatureEntryDeleteAllComponent', () => {
  let component: RefundSignatureEntryDeleteAllComponent;
  let fixture: ComponentFixture<RefundSignatureEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundSignatureEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSignatureEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
