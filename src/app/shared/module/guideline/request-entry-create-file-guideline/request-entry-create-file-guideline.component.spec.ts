import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryCreateFileGuidelineComponent } from './request-entry-create-file-guideline.component';

describe('RequestEntryCreateFileGuidelineComponent', () => {
  let component: RequestEntryCreateFileGuidelineComponent;
  let fixture: ComponentFixture<RequestEntryCreateFileGuidelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryCreateFileGuidelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryCreateFileGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
