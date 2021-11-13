import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  // addQty(distance: any = 0) {
  //     this.fireBaseAnSvc.firebaseAnalyticsEvents('add_to_cart', 'add_to_cart');
  //     this.onAdd.emit(); 

  // }

  // quantityInput(quantity) {
  //   if (quantity < this.selectedQuantity) {
  //     this.onRemove.emit();
  //   }
  //   else {
  //     this.onAdd.emit();
  //   }
  //   let multiply = 1 / GlobalVariable.decimal_quantity_step;
  //   this.selectedQuantity = parseFloat(((Math.ceil(quantity * multiply) / multiply)).toFixed(2));
  //   this.quantityUpdate.emit(this.selectedQuantity);
  // }

}
