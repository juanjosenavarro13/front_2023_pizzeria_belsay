import { environment } from './../../../environments/environment.prod';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle(environment.titleApp + ' | Inicio');
  }
}
