import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryDeleteAllComponent } from './refund-entry-delete-all.component';

describe('RefundEntryDeleteAllComponent', () => {
  let component: RefundEntryDeleteAllComponent;
  let fixture: ComponentFixture<RefundEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
