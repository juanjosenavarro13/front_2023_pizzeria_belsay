import { product } from '../../../models/carta.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories_data } from '../../data/categories';
import { products_data } from '../../data/products';

/**
 * pagina de categorias
 */
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent {
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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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
}
