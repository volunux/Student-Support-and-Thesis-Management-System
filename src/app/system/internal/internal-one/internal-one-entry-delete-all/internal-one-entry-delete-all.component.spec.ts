import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryDeleteAllComponent } from './internal-one-entry-delete-all.component';

describe('InternalOneEntryDeleteAllComponent', () => {
  let component: InternalOneEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalOneEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
