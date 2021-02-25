import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntryDetailComponent } from './internal-three-entry-detail.component';

describe('InternalThreeEntryDetailComponent', () => {
  let component: InternalThreeEntryDetailComponent;
  let fixture: ComponentFixture<InternalThreeEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
