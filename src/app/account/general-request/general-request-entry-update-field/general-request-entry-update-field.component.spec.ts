import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryUpdateFieldComponent } from './general-request-entry-update-field.component';

describe('GeneralRequestEntryUpdateFieldComponent', () => {
  let component: GeneralRequestEntryUpdateFieldComponent;
  let fixture: ComponentFixture<GeneralRequestEntryUpdateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryUpdateFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryUpdateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
