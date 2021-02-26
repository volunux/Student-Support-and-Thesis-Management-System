import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryTransferValidatorComponent } from './gr-entry-transfer-validator.component';

describe('GeneralRequestEntryTransferValidatorComponent', () => {
  let component: GeneralRequestEntryTransferValidatorComponent;
  let fixture: ComponentFixture<GeneralRequestEntryTransferValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryTransferValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryTransferValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
