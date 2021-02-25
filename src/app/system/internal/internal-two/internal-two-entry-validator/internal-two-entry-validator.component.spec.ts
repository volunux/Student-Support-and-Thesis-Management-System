import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryValidatorComponent } from './internal-two-entry-validator.component';

describe('InternalTwoEntryValidatorComponent', () => {
  let component: InternalTwoEntryValidatorComponent;
  let fixture: ComponentFixture<InternalTwoEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
