import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

/**
 * componente miga de pan
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  /**
   * array de los nombres de las rutas
   */
  public currentRoute: string[] = [''];

  /**
   * array de los links de las rutas
   */
  public currentRouteLink: string[] = [];

  /**
   * constructor del componente que cambia el titulo y monta la miga de pan
   * @param router
   * @param titleService
   */
  constructor(private router: Router, private titleService: Title) {
    this.changeTitle();
    this.currentRoute = this.clearName(this.splitRoute(this.router.url));
    this.changeTitle(this.currentRoute[this.currentRoute.length - 1]);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.clearName(this.splitRoute(event.url));
        this.changeTitle(this.currentRoute[this.currentRoute.length - 1]);
      }
    });
  }

  /**
   * limpiar espacios %20 de los nombres
   * @param routes
   * @returns
   */
  private clearName(routes: string[]): string[] {
    const routesClear: string[] = [];
    routes.forEach((el) => {
      routesClear.push(el.replace(/%20/g, ' '));
    });
    return routesClear;
  }

  /**
   * genera la miga de pan
   * @param route
   * @returns
   */
  private splitRoute(route: string): string[] {
    this.generateLinks(route);
    return route.split('/').filter((r) => r !== '');
  }

  /**
   * genera el array de los links para la miga de pan
   * @param route
   */
  private generateLinks(route: string): void {
    this.currentRouteLink = [''];
    route.split('/').forEach((link, index) => {
      if (index > 0) {
        this.currentRouteLink[index] =
          this.currentRouteLink[index - 1] + '/' + link;
      }
    });
  }

  /**
   * cambia el titulo segun la url en la que estemos
   * @param title
   */
  private changeTitle(title?: string): void {
    if (typeof title !== 'string') title = 'Inicio';
    title = title.replace(/%20/g, ' ');
    this.titleService.setTitle(environment.titleApp + ' | ' + title);
  }
}
