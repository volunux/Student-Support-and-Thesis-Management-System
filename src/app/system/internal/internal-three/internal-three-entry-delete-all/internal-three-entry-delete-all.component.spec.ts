import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntryDeleteAllComponent } from './internal-three-entry-delete-all.component';

describe('InternalThreeEntryDeleteAllComponent', () => {
  let component: InternalThreeEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalThreeEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
