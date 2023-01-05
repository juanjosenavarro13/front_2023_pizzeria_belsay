import { categories_type, product } from './../../../models/carta.model';
import { Component, Input } from '@angular/core';

/**
 * component mostrar precio
 */
@Component({
  selector: 'app-show-price',
  templateUrl: './show-price.component.html',
  styleUrls: ['./show-price.component.scss'],
})
export class ShowPriceComponent {
  /**
   * input del producto
   */
  @Input() product: product = {
    category: categories_type.Bebidas,
    ingredientes: '',
    name: '',
    precio: {},
  };

  public categories_type = categories_type;
}
