import { TestBed } from '@angular/core/testing';

import { TextTransferService } from '../text-transfer.service';

describe('TextTransferService', () => {
  let service: TextTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
