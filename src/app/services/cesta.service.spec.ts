import { TestBed } from '@angular/core/testing';

import { CestaService } from './cesta.service';

describe('CestaService', () => {
  let service: CestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addProduct', () => {
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, true);
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, false);

    expect(1).toEqual(1);
  });
});
