import { cesta, cestaProductModel } from './../models/cesta.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  private cesta: cesta = { products: [], local: null };
  constructor() {
    this.cesta = this.getCesta();
  }

  public getCesta(): cesta {
    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem('cesta')!) || {
        products: [],
        local: null,
      }
    );
  }

  public addProduct(product: cestaProductModel, local: boolean): void {
    if (this.cesta?.local === null) this.cesta.local = local;

    if (local !== this.cesta?.local) {
      $('#modalCesta').show();
    } else {
      this.cesta.products.push(product);
      localStorage.setItem('cesta', JSON.stringify(this.cesta));
    }
  }

  public resetCesta() {
    const cesta: cesta = { products: [], local: null };
    this.cesta = cesta;
    localStorage.setItem('cesta', JSON.stringify(cesta));
  }
}
