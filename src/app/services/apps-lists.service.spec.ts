import { TestBed } from '@angular/core/testing';

import { AppsListsService } from './apps-lists.service';

describe('AppsListsService', () => {
  let service: AppsListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
