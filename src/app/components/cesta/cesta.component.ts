import { categories_type } from 'src/app/models/carta.model';
import { environment } from 'src/environments/environment';
import { CestaService } from './../../services/cesta.service';
import { cesta } from './../../models/cesta.model';
import { Component, Input } from '@angular/core';

/**
 * cesta de la compra componente
 */
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss'],
})
export class CestaComponent {
  /**
   * constructor
   * @param CestaService
   */
  constructor(private CestaService: CestaService) {}
  /**
   * input de cesta
   */
  @Input() cesta: cesta = {
    products: [],
    local: null,
    total: 0,
  };

  public categories_type = categories_type;

  /**
   * reiniciar cesta
   */
  public resetCesta() {
    this.CestaService.resetCesta();
    this.cesta = {
      products: [],
      local: null,
      total: 0,
    };
  }

  /**
   * delete item
   * @param id
   */
  deleteItem(id: number): void {
    this.cesta = this.CestaService.deleteProduct(id);
  }

  public send(reparto: string, direccion: string, comentarios: string) {
    const salto = '%0A';
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cesta: cesta = JSON.parse(localStorage.getItem('cesta')!);
    const fecha = new Date(Date.now()).toLocaleString();

    let text = '*[' + fecha + ']*' + salto;
    text += 'Reparto: ';

    if (reparto === 'local') {
      text += 'recoger en local';
    } else if (reparto === 'domicilio') {
      text += 'enviar a ' + direccion;
    }

    text += salto;

    cesta?.products.forEach((el) => {
      text += `-${el.name.split(':')[0]} `;

      if (
        el.name
          .split(':')[0]
          .includes(
            categories_type.Pizzas.toLocaleUpperCase() ||
              categories_type.Bocatas.toLocaleUpperCase() ||
              categories_type.Chapatas.toLocaleUpperCase() ||
              categories_type.Patatas.toLocaleUpperCase()
          )
      ) {
        text += `${el.tam}`;
      }

      text += `${el.name.split(':')[1]} | ${el.price}€ ${salto}`;
    });

    text += `*Total: ${cesta?.total}€*`;

    if (comentarios !== '') text += salto + `Comentarios: ${comentarios}`;

    const url = `https://api.whatsapp.com/send?phone=34${environment.infoApp.phone2}&text=${text}`;
    window.open(url, '', '');
  }
}
