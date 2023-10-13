import { Component, Input, OnInit } from '@angular/core';
import { CarProductDto } from 'src/app/domain/DTO/product';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.scss'],
})
export class ShoppingCartProductComponent  implements OnInit {
  @Input() cartProductDto!: CarProductDto;

  constructor() { }

  ngOnInit() {}

  addUnit():void {
    this.cartProductDto.cantidad!++;
  }

  removeUnit():void {
    if(!this.isUnitValid()){return;}

    this.cartProductDto.cantidad!--;
  }

  private isUnitValid():boolean {
    return this.cartProductDto.cantidad! > 1;
  }

}
