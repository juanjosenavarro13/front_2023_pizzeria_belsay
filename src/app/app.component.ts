import { CestaService } from './services/cesta.service';
import { Component, OnInit } from '@angular/core';
import { cesta } from './models/cesta.model';

/**
 * app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * cesta
   */
  public cesta: cesta = {
    products: [],
    local: null,
    total: 0,
  };
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
  constructor(private CestaService: CestaService) {
    this.initLoading();
    this.getCesta();
  }

  /**
   * init
   */
  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const script = (document as any).createElement('script');
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    script.onload = () => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).adsbygoogle.push({
          google_ad_client: 'ca-pub-4234128193055516',
          enable_page_level_ads: true,
        });
      }, 200);
    };

    document.body.appendChild(script);
  }

  /**
   * loading de pagina
   */
  private initLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.timeForLoading);
  }

  /**
   * obtener cesta
   */
  getCesta() {
    this.cesta = this.CestaService.getCesta();
  }
}
