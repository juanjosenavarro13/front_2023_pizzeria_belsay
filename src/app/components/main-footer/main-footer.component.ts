import { InfoApp } from './../../models/info-app.model';
import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent {
  public infoApp: InfoApp = environment.infoApp;
}
