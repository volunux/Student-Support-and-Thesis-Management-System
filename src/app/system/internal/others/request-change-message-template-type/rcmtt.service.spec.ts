import { TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeService } from './rcmtt.service';

describe('RequestChangeMessageTemplateTypeService', () => {
  let service: RequestChangeMessageTemplateTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChangeMessageTemplateTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
