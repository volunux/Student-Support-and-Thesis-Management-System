import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryDeleteAllComponent } from './internal-two-entry-delete-all.component';

describe('InternalTwoEntryDeleteAllComponent', () => {
  let component: InternalTwoEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalTwoEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
