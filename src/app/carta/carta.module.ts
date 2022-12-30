import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaRoutingModule } from './carta-routing.module';
import { HomepageCartaComponent } from './components/homepage-carta/homepage-carta.component';

@NgModule({
  declarations: [HomepageCartaComponent],
  imports: [CommonModule, CartaRoutingModule],
})
export class CartaModule {}
