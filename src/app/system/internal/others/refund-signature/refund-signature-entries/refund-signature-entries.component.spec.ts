import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSignatureEntriesComponent } from './refund-signature-entries.component';

describe('RefundSignatureEntriesComponent', () => {
  let component: RefundSignatureEntriesComponent;
  let fixture: ComponentFixture<RefundSignatureEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundSignatureEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSignatureEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
