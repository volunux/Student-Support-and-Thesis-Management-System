import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryDetailComponent } from './internal-one-entry-detail.component';

describe('InternalOneEntryDetailComponent', () => {
  let component: InternalOneEntryDetailComponent;
  let fixture: ComponentFixture<InternalOneEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
