import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarProductDto } from 'src/app/domain/DTO/product';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.scss'],
})
export class ShoppingCartProductComponent  implements OnInit {
  @Input() cartProductDto!: CarProductDto;

  @Output()
  removeProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  addUnit():void {
    this.cartProductDto.cantidad!++;
  }

  removeUnit():void {
    if(!this.isUnitValid()){return;}

    this.cartProductDto.cantidad!--;
  }

  onRemoveProductClick():void {
    this.removeProduct.emit(this.cartProductDto._id!);
  }

  private isUnitValid():boolean {
    return this.cartProductDto.cantidad! > 1;
  }

}
