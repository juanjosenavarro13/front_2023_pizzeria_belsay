import { Component } from '@angular/core';
import { category } from '../../data/carta.model';
import { categories } from '../../data/categories';

@Component({
  selector: 'app-homepage-carta',
  templateUrl: './homepage-carta.component.html',
  styleUrls: ['./homepage-carta.component.scss'],
})
export class HomepageCartaComponent {
  public categories: category[] = categories;
}
