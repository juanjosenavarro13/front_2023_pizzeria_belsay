import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading = true;
  private timeForLoading = 2000;

  constructor() {
    this.initLoading();
  }

  private initLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.timeForLoading);
  }
}
