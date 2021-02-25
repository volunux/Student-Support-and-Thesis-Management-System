import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntryValidatorComponent } from './internal-three-entry-validator.component';

describe('InternalThreeEntryValidatorComponent', () => {
  let component: InternalThreeEntryValidatorComponent;
  let fixture: ComponentFixture<InternalThreeEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
