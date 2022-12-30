import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';
import { InfoApp } from 'src/app/models/info-app.model';

@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.scss'],
})
export class PageLocationComponent {
  public infoApp: InfoApp = environment.infoApp;
}
