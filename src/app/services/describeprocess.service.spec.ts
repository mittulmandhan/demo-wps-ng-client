import { TestBed } from '@angular/core/testing';

import { DescribeprocessService } from './describeprocess.service';

describe('DescribeprocessService', () => {
  let service: DescribeprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescribeprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
