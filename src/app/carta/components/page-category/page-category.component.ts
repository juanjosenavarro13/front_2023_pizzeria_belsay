import { cestaProductModel } from './../../../models/cesta.model';
import { CestaService } from './../../../services/cesta.service';
import { product } from '../../../models/carta.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories_data } from '../../data/categories';
import { products_data } from '../../data/products';

/**
 * pagina de categorias
 */
@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss'],
})
export class PageCategoryComponent {
  /**
   * categorias
   */
  public category = this.activatedRoute.snapshot.params['category'] || null;

  /**
   * productos
   */
  public products: product[];

  /**
   * datos de categorias
   */
  public categories_data = categories_data;

  /**
   * datos de productos
   */
  private products_data = products_data;

  /**
   * constructor
   * @param activatedRoute
   * @param router
   * @param CestaService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CestaService: CestaService
  ) {
    if (!this.validatedCategory(this.category)) this.router.navigate(['/']);
    this.products = this.getProducts();
  }

  /**
   * validar categoria
   * @param name
   * @returns
   */
  public validatedCategory(name: string) {
    return this.categories_data.find((category) => category.name === name) !==
      undefined
      ? true
      : false;
  }

  /**
   * obtener productos de la categoria
   * @returns
   */
  private getProducts() {
    return this.products_data.filter(
      (product) => product.category === this.category
    );
  }

  /**
   * agregar a la cesta
   * @param name
   * @param tam
   * @param price
   * @param local
   */
  public addCart(name: string, tam: string, price = 0, local = true) {
    if (price !== 0) {
      const product: cestaProductModel = {
        name,
        tam,
        price,
      };
      this.CestaService.addProduct(product, local);
    }
  }
}
