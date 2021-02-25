import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryDeleteComponent } from './internal-two-entry-delete.component';

describe('InternalTwoEntryDeleteComponent', () => {
  let component: InternalTwoEntryDeleteComponent;
  let fixture: ComponentFixture<InternalTwoEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
