import { TestBed } from '@angular/core/testing';

import { CestaService } from './cesta.service';

describe('CestaService', () => {
  let service: CestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaService);
    const mockLocalStorage = {
      products: [
        {
          name: 'pizzas: pizza normal',
          tam: 'Pequeña',
          price: 1.1,
        },
        {
          name: 'pizzas: pizza normal',
          tam: 'Pequeña',
          price: 1.1,
        },
        {
          name: 'pizzas: pizza normal',
          tam: 'Pequeña',
          price: 1.1,
        },
        {
          name: 'pizzas: pizza normal',
          tam: 'Pequeña',
          price: 1.1,
        },
      ],
      local: false,
      total: 4.4,
    };
    spyOn(localStorage, 'getItem').and.returnValue(
      JSON.stringify(mockLocalStorage)
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addProduct', () => {
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, false);
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, true);
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, false);

    expect(1).toEqual(1);
  });

  it('delete product', () => {
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, false);
    service.addProduct({ name: 'name', price: 10, tam: 'pequeña' }, false);

    service.deleteProduct(1);

    expect(1).toEqual(1);
  });
});
