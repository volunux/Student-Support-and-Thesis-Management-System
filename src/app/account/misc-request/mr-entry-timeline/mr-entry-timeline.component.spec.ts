import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryTimelineComponent } from './mr-entry-timeline.component';

describe('MiscRequestEntryTimelineComponent', () => {
  let component: MiscRequestEntryTimelineComponent;
  let fixture: ComponentFixture<MiscRequestEntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
