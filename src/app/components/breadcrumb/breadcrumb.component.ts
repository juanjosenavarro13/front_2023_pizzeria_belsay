import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  public currentRoute: string[] = [''];
  public currentRouteLink: string[] = [];

  constructor(private router: Router, private titleService: Title) {
    this.changeTitle();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.splitRoute(event.url);
        this.changeTitle(this.currentRoute[this.currentRoute.length - 1]);
      }
    });
  }

  private splitRoute(route: string): string[] {
    this.generateLinks(route);
    return route.split('/').filter((r) => r !== '');
  }

  private generateLinks(route: string): void {
    this.currentRouteLink = [''];
    route.split('/').forEach((link, index) => {
      if (index > 0) {
        this.currentRouteLink[index] =
          this.currentRouteLink[index - 1] + '/' + link;
      }
    });
  }

  private changeTitle(title?: string): void {
    if (typeof title !== 'string') title = 'Inicio';
    this.titleService.setTitle(environment.titleApp + ' | ' + title);
  }
}
