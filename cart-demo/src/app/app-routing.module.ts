import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './public-pages/landing-page/landing-page.component';
import { ProductListComponent } from './public-pages/product-list/product-list/product-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingPageComponent
  // },
  {
    path: '',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
