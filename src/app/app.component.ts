import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
