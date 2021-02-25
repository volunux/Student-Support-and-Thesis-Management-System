import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntryUpdateComponent } from './internal-three-entry-update.component';

describe('InternalThreeEntryUpdateComponent', () => {
  let component: InternalThreeEntryUpdateComponent;
  let fixture: ComponentFixture<InternalThreeEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
