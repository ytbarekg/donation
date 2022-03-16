import { TestBed } from '@angular/core/testing';

import { EndorsementApiService } from './endorsement-api.service';

describe('EndorsementApiService', () => {
  let service: EndorsementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndorsementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
