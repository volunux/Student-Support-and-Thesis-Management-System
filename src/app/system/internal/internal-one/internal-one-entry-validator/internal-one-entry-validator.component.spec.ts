import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryValidatorComponent } from './internal-one-entry-validator.component';

describe('InternalOneEntryValidatorComponent', () => {
  let component: InternalOneEntryValidatorComponent;
  let fixture: ComponentFixture<InternalOneEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
