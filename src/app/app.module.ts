import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FacebookPluginComponent } from './components/facebook-plugin/facebook-plugin.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageLocationComponent } from './components/page-location/page-location.component';
import { ModalCestaComponent } from './components/modal-cesta/modal-cesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CestaComponent,
    HomepageComponent,
    ErrorpageComponent,
    ScheduleComponent,
    FacebookPluginComponent,
    MainFooterComponent,
    BreadcrumbComponent,
    PageLocationComponent,
    ModalCestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
