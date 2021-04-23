import { TestBed } from '@angular/core/testing';

import { AcrUpdateService } from './acr-update.service';

describe('AcrUpdateService', () => {
  let service: AcrUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
