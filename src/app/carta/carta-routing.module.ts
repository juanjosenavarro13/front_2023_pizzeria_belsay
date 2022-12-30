import { ErrorpageComponent } from './../components/errorpage/errorpage.component';
import { HomepageCartaComponent } from './components/homepage-carta/homepage-carta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageCartaComponent,
  },
  {
    path: '**',
    component: ErrorpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaRoutingModule {}
