import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryDetailComponent } from './internal-two-entry-detail.component';

describe('InternalTwoEntryDetailComponent', () => {
  let component: InternalTwoEntryDetailComponent;
  let fixture: ComponentFixture<InternalTwoEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
