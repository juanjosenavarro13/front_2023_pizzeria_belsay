import { cesta } from './../../models/cesta.model';
import { Component, Input } from '@angular/core';

/**
 * cesta de la compra componente
 */
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss'],
})
export class CestaComponent {
  @Input() cesta: cesta = {
    products: [],
    local: null,
  };
}
