import { CestaService } from './services/cesta.service';
import { Component } from '@angular/core';
import { cesta } from './models/cesta.model';

/**
 * app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * cesta
   */
  public cesta: cesta = {
    products: [],
    local: null,
    total: 0,
  };
  /**
   * boolean que controla el loading de la pagina
   */
  public loading = true;

  /**
   * tiempo que tarda la pagina en cargar
   */
  private timeForLoading = 2000;

  /**
   * constructor
   */
  constructor(private CestaService: CestaService) {
    this.initLoading();
    this.getCesta();
  }

  /**
   * loading de pagina
   */
  private initLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.timeForLoading);
  }

  /**
   * obtener cesta
   */
  getCesta() {
    this.cesta = this.CestaService.getCesta();
  }
}
