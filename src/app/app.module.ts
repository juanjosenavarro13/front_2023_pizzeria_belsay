import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FacebookPluginComponent } from './components/facebook-plugin/facebook-plugin.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageLocationComponent } from './components/page-location/page-location.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CartComponent,
    HomepageComponent,
    ErrorpageComponent,
    ScheduleComponent,
    FacebookPluginComponent,
    MainFooterComponent,
    BreadcrumbComponent,
    PageLocationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
