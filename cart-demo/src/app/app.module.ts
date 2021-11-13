import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './public-pages/landing-page/landing-page.component';
import { ProductListComponent } from './public-pages/product-list/product-list/product-list.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { ProductAlertsComponent } from './public-pages/product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductListComponent,
    TopNavComponent,
    ProductAlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
