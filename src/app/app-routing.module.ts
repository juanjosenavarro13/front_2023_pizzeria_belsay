import { PageLocationComponent } from './components/page-location/page-location.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'localizacion',
    component: PageLocationComponent,
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./carta/carta.module').then((m) => m.CartaModule),
  },
  {
    path: '**',
    component: ErrorpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
