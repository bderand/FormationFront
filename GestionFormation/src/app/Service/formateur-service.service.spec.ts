import { TestBed } from '@angular/core/testing';

import { FormateurServiceService } from './formateur-service.service';

describe('FormateurServiceService', () => {
  let service: FormateurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
