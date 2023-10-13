import { Component } from '@angular/core';
import { CarProductDto } from 'src/app/domain/DTO/product';
import { CartStorageService } from 'src/app/application/services/cart-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  total: number = 0;
  products!: CarProductDto[] | null;
 
  constructor(private cartStorageService: CartStorageService) { }

  async ionViewWillEnter() {
    this.products = await this.cartStorageService.getCart();
    this.calculateTotal()
  }

  async ionViewWillLeave() {
    this.cartStorageService.updateCart(this.products!);
  }

  calculateTotal() {
    this.total = 0;
    this.products!.forEach(product => {
      this.total += (product.precio * product.cantidad!);
    });
  }

  deleteCartContent(){
    this.cartStorageService.cleanCart();
    this.products = [];
    this.total = 0;
  }

}
