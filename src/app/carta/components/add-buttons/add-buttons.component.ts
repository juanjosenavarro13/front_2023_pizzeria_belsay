import { CestaService } from './../../../services/cesta.service';
import { categories_type, product } from './../../../models/carta.model';
import { Component, Input } from '@angular/core';
import { cestaProductModel } from 'src/app/models/cesta.model';

/**
 * component buttons add
 */
@Component({
  selector: 'app-add-buttons',
  templateUrl: './add-buttons.component.html',
  styleUrls: ['./add-buttons.component.scss'],
})
export class AddButtonsComponent {
  /**
   * input del producto
   */
  @Input() product: product = {
    category: categories_type.Bebidas,
    ingredientes: '',
    name: '',
    precio: {},
  };
  /**
   * input de la categoria
   */
  @Input() category = '';

  /**
   * constructor
   * @param CestaService
   */
  constructor(private CestaService: CestaService) {}

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
