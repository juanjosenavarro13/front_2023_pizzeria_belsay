import { InfoApp } from './../../models/info-app.model';
import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';

/**
 * main footer componente
 */
@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent {
  /**
   * variable que obtiene la info de variables de entorno
   */
  public infoApp: InfoApp = environment.infoApp;

  /**
   * fecha
   */
  public fecha = new Date();
}
