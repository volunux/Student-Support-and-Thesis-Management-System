import { TestBed } from '@angular/core/testing';
import { RequestEntryMessageTemplateFormService } from './r-e-message-template-form.service';

describe('RequestEntryMessageTemplateFormService', () => {
  
  let service : RequestEntryMessageTemplateFormService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(RequestEntryMessageTemplateFormService);

  });


  it('should be created', () => {

    expect(service).toBeTruthy();

    expect(service.permanentData).toBeDefined();

    expect(service.commonValidators).toBeDefined();

    expect(service.permanentProps).toBeDefined();

    expect(service.otherCtrls).toBeDefined();

  });

});
