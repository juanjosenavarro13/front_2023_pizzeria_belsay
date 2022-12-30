import { Component } from '@angular/core';

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
  constructor() {
    this.initLoading();
  }

  /**
   * loading de pagina
   */
  private initLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.timeForLoading);
  }
}
