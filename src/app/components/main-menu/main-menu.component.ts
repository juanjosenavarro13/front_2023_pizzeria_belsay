import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cesta } from 'src/app/models/cesta.model';

/**
 * main menu componente
 */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  @Input() cesta: cesta = {
    products: [],
    local: null,
  };
  @Output()
  openCestaEvent = new EventEmitter<true>();

  clickCesta() {
    this.openCestaEvent.emit(true);
  }
}
