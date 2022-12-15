import { TestBed } from '@angular/core/testing';

import { CommercialServiceService } from './commercial-service.service';

describe('CommercialServiceService', () => {
  let service: CommercialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
