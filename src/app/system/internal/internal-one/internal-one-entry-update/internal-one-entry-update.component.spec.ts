import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryUpdateComponent } from './internal-one-entry-update.component';

describe('InternalOneEntryUpdateComponent', () => {
  let component: InternalOneEntryUpdateComponent;
  let fixture: ComponentFixture<InternalOneEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
