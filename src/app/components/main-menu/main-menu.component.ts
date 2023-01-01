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
  /**
   * input de cesta
   */
  @Input() cesta: cesta = {
    products: [],
    local: null,
    total: 0,
  };
  /**
   * output del evento
   */
  @Output()
  openCestaEvent = new EventEmitter<true>();

  /**
   * click para abrir cesta
   */
  clickCesta() {
    this.openCestaEvent.emit(true);
  }
}
