import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = Products;

  constructor() { }

  ngOnInit(): void {
  }

  onShare() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
