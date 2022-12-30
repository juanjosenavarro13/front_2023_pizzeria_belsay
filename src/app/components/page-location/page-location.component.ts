import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';
import { InfoApp } from 'src/app/models/info-app.model';

/**
 * pagina de localizacion
 */
@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.scss'],
})
export class PageLocationComponent {
  /**
   * variable que obtiene la info de las variables de entorno
   */
  public infoApp: InfoApp = environment.infoApp;
}
