import { TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateService } from './rcmt.service';

describe('RequestChangeMessageTemplateService', () => {
  let service: RequestChangeMessageTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChangeMessageTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
