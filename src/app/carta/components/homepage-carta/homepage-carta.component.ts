import { Component } from '@angular/core';
import { category } from '../../data/carta.model';
import { categories_data } from '../../data/categories';

/**
 * home de menu
 */
@Component({
  selector: 'app-homepage-carta',
  templateUrl: './homepage-carta.component.html',
  styleUrls: ['./homepage-carta.component.scss'],
})
export class HomepageCartaComponent {
  /**
   * categorias
   */
  public categories_data: category[] = categories_data;
}
