import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryDetailComponent } from './refund-entry-detail.component';

describe('RefundEntryDetailComponent', () => {
  let component: RefundEntryDetailComponent;
  let fixture: ComponentFixture<RefundEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
