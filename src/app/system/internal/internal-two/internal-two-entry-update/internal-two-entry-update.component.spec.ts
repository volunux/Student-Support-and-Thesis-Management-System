import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryUpdateComponent } from './internal-two-entry-update.component';

describe('InternalTwoEntryUpdateComponent', () => {
  let component: InternalTwoEntryUpdateComponent;
  let fixture: ComponentFixture<InternalTwoEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
