import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFourEntryDeleteAllComponent } from './internal-four-entry-delete-all.component';

describe('InternalFourEntryDeleteAllComponent', () => {
  let component: InternalFourEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalFourEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalFourEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalFourEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
