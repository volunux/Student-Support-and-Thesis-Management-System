import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryValidatorComponent } from './rcmt-entry-validator.component';

describe('RequestChangeMessageTemplateEntryValidatorComponent', () => {
  let component: RequestChangeMessageTemplateEntryValidatorComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
