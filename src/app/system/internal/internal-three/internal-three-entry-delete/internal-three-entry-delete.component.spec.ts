import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntryDeleteComponent } from './internal-three-entry-delete.component';

describe('InternalThreeEntryDeleteComponent', () => {
  let component: InternalThreeEntryDeleteComponent;
  let fixture: ComponentFixture<InternalThreeEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
