import { TestBed } from '@angular/core/testing';

import { BeneficiaryApiServiceService } from './beneficiary-api-service.service';

describe('BeneficiaryApiServiceService', () => {
  let service: BeneficiaryApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiaryApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
