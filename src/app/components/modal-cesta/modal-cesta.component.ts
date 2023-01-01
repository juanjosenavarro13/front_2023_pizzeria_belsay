import { CestaService } from './../../services/cesta.service';
import { Component } from '@angular/core';
import { cesta } from 'src/app/models/cesta.model';

@Component({
  selector: 'app-modal-cesta',
  templateUrl: './modal-cesta.component.html',
  styleUrls: ['./modal-cesta.component.scss'],
})
export class ModalCestaComponent {
  constructor(private CestaService: CestaService) {}
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  public cesta: cesta = JSON.parse(localStorage.getItem('cesta')!);

  public closeModal() {
    $('#modalCesta').hide();
  }

  public resetCesta() {
    this.CestaService.resetCesta();
    this.closeModal();
  }
}
