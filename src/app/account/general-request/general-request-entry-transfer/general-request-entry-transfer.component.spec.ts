import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryTransferComponent } from './general-request-entry-transfer.component';

describe('GeneralRequestEntryTransferComponent', () => {
  let component: GeneralRequestEntryTransferComponent;
  let fixture: ComponentFixture<GeneralRequestEntryTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
