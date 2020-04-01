import { TestBed } from '@angular/core/testing';

import { ServiceinfoService } from './serviceinfo.service';

describe('ServiceinfoService', () => {
  let service: ServiceinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
