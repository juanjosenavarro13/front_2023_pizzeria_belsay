import { CestaService } from './../../services/cesta.service';
import { Component } from '@angular/core';
import { cesta } from 'src/app/models/cesta.model';

/**
 * modal cesta
 */
@Component({
  selector: 'app-modal-cesta',
  templateUrl: './modal-cesta.component.html',
  styleUrls: ['./modal-cesta.component.scss'],
})
export class ModalCestaComponent {
  /**
   * constructor
   * @param CestaService
   */
  constructor(private CestaService: CestaService) {}
  /**
   * cesta
   */
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  public cesta: cesta = JSON.parse(localStorage.getItem('cesta')!);

  /**
   * cerrar modal
   */
  public closeModal() {
    $('#modalCesta').hide();
  }

  /**
   * reiniciar cesta
   */
  public resetCesta() {
    this.CestaService.resetCesta();
    this.closeModal();
  }
}
