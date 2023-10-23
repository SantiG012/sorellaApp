import { Injectable } from '@angular/core';
import { CarProductDto } from 'src/app/domain/DTO/product';
import { ProductStorageService } from './product-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {
  private cartKey: string = "cart"

  constructor(private productStorageService: ProductStorageService) { }

  async addProductToCart(product: CarProductDto){
    const cart = await this.getCart();

    if(cart){
      cart.push(product);
      this.productStorageService.set(this.cartKey, cart);
    }else{
      this.productStorageService.set(this.cartKey, [product]);
    }
  }

  async updateCart(products: CarProductDto[]){
    await this.productStorageService.set(this.cartKey, products);
  }

  async removeProductFromCart(id: string){
    const cart = await this.getCart();

    if(cart){
      const newCart = cart.filter(product => product._id !== id);
      this.productStorageService.set(this.cartKey, newCart);
    }
  }

  async getCart(){
    return await this.productStorageService.get(this.cartKey)
  }

  cleanCart(){
    this.productStorageService.remove(this.cartKey);
  }

}
