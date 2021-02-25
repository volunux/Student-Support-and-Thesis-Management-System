import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryDeleteComponent } from './internal-one-entry-delete.component';

describe('InternalOneEntryDeleteComponent', () => {
  let component: InternalOneEntryDeleteComponent;
  let fixture: ComponentFixture<InternalOneEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
