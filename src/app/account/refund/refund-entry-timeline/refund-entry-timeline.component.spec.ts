import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryTimelineComponent } from './refund-entry-timeline.component';

describe('RefundEntryTimelineComponent', () => {
  let component: RefundEntryTimelineComponent;
  let fixture: ComponentFixture<RefundEntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
