import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryTimelineComponent } from './general-request-entry-timeline.component';

describe('GeneralRequestEntryTimelineComponent', () => {
  let component: GeneralRequestEntryTimelineComponent;
  let fixture: ComponentFixture<GeneralRequestEntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
