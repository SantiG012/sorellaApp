import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.page.html',
  styleUrls: ['./cart-view.page.scss'],
})
export class CartViewPage implements OnInit {
  public products: any[] = [
    {
      name: "Product1",
      price: 100,
      quantity: 1,
      id: 1
    },
    {
      name: "Product2",
      price: 200,
      quantity: 2,
      id: 2
    },
    {
      name: "Product3",
      price: 300,
      quantity: 3,
      id: 3
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
