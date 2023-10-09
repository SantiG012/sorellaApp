import { Component, OnInit } from '@angular/core';
import { CartStorageService } from 'src/app/application/services/cart-storage.service';
import { CarProductDto } from 'src/app/domain/DTO/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.page.html',
  styleUrls: ['./cart-view.page.scss'],
})
export class CartViewPage implements OnInit {
  total: number = 0;
  products!: CarProductDto[] | null;
 
  constructor(private cartStorageService: CartStorageService) { }

  async ngOnInit() {
    this.products = await this.cartStorageService.getCart();
    this.calculateTotal()
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
