import { TestBed } from '@angular/core/testing';

import { ProductImplementationRepository } from '../product-implementation.repository';

describe('ProductImplementationService', () => {
  let service: ProductImplementationRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductImplementationRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
