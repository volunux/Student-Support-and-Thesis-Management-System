import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryTimelineComponent } from './acr-entry-timeline.component';

describe('AccountChangeRequestEntryTimelineComponent', () => {
  let component: AccountChangeRequestEntryTimelineComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
