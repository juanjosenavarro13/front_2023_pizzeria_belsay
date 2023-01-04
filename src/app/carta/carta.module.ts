import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaRoutingModule } from './carta-routing.module';
import { HomepageCartaComponent } from './components/homepage-carta/homepage-carta.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { AddButtonsComponent } from './components/add-buttons/add-buttons.component';
import { ShowPriceComponent } from './components/show-price/show-price.component';

@NgModule({
  declarations: [
    HomepageCartaComponent,
    PageListComponent,
    AddButtonsComponent,
    ShowPriceComponent,
  ],
  imports: [CommonModule, CartaRoutingModule, SharedModule],
})
export class CartaModule {}
