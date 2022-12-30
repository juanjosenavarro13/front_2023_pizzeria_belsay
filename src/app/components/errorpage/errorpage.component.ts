import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * pagina de error not found
 */
@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss'],
})
export class ErrorpageComponent {
  /**
   * constructor que injecta y redirige a la pagina de inicio a los 3 segundos
   * @param router
   */
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
