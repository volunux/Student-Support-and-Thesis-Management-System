import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryOptionComponent } from './refund-entry-option.component';

describe('RefundEntryOptionComponent', () => {
  let component: RefundEntryOptionComponent;
  let fixture: ComponentFixture<RefundEntryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
