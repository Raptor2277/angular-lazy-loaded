import { TestBed } from '@angular/core/testing';

import { OktaApiServiceService } from './okta-api-service.service';

describe('OktaApiServiceService', () => {
  let service: OktaApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
