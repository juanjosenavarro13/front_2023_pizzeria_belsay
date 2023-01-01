import { Component } from '@angular/core';
import { category } from '../../data/carta.model';
import { categories_data } from '../../data/categories';

@Component({
  selector: 'app-homepage-carta',
  templateUrl: './homepage-carta.component.html',
  styleUrls: ['./homepage-carta.component.scss'],
})
export class HomepageCartaComponent {
  public categories_data: category[] = categories_data;
}
