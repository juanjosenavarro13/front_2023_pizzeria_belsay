import { cestaProductModel } from './../../../models/cesta.model';
import { CestaService } from './../../../services/cesta.service';
import { product } from './../../data/carta.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories_data } from '../../data/categories';
import { products_data } from '../../data/products';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss'],
})
export class PageCategoryComponent {
  public category = this.activatedRoute.snapshot.params['category'] || null;
  public products: product[];

  private categories_data = categories_data;
  private products_data = products_data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CestaService: CestaService
  ) {
    if (!this.validatedCategory(this.category)) this.router.navigate(['/']);
    this.products = this.getProducts();
  }

  private validatedCategory(name: string) {
    return this.categories_data.find((category) => category.name === name) !==
      undefined
      ? true
      : false;
  }

  private getProducts() {
    return this.products_data.filter(
      (product) => product.category === this.category
    );
  }

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
