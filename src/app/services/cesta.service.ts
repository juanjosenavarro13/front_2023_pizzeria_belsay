import { cesta, cestaProductModel } from './../models/cesta.model';
import { Injectable } from '@angular/core';

/**
 * servicio para cesta
 */
@Injectable({
  providedIn: 'root',
})
export class CestaService {
  /**
   * cesta
   */
  private cesta: cesta = { products: [], local: null, total: 0 };

  /**
   * constructor de cesta
   */
  constructor() {
    this.cesta = this.getCesta();
  }

  /**
   * obtener cesta
   * @returns
   */
  public getCesta(): cesta {
    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem('cesta')!) || {
        products: [],
        local: null,
        total: 0,
      }
    );
  }

  /**
   * agregar producto a la cesta
   * @param product
   * @param local
   */
  public addProduct(product: cestaProductModel, local: boolean): void {
    if (this.cesta?.local === null) this.cesta.local = local;

    if (local !== this.cesta?.local) {
      $('#modalCesta').show();
    } else {
      this.cesta.products.push(product);
      this.cesta.total = this.calculatedTotal();
      localStorage.setItem('cesta', JSON.stringify(this.cesta));
    }
  }

  /**
   * reiniciar cesta
   */
  public resetCesta() {
    const cesta: cesta = { products: [], local: null, total: 0 };
    this.cesta = cesta;
    localStorage.setItem('cesta', JSON.stringify(cesta));
  }

  /**
   * delete product
   * @param id
   * @returns
   */
  public deleteProduct(id: number): cesta {
    this.cesta?.products.splice(id, 1);
    if (this.cesta?.total) {
      this.cesta.total = this.calculatedTotal();
    }
    localStorage.setItem('cesta', JSON.stringify(this.cesta));
    return this.cesta;
  }

  /**
   * calcular total
   * @returns
   */
  private calculatedTotal(): number {
    let total = 0;

    this.cesta?.products.forEach((product) => {
      total += product.price;
    });

    if (!this.cesta?.local) {
      total += 1.5;
    }

    return Number(total.toFixed(2));
  }
}
