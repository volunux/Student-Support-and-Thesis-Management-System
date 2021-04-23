import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryValidatorComponent } from './rcmtt-entry-validator.component';

describe('RequestChangeMessageTemplateTypeEntryValidatorComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryValidatorComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
