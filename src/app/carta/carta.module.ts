import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaRoutingModule } from './carta-routing.module';
import { HomepageCartaComponent } from './components/homepage-carta/homepage-carta.component';
import { PageCategoryComponent } from './components/page-category/page-category.component';

@NgModule({
  declarations: [HomepageCartaComponent, PageCategoryComponent],
  imports: [CommonModule, CartaRoutingModule, SharedModule],
})
export class CartaModule {}
