import { AfterViewInit, Component } from '@angular/core';
import { CarProductDto } from 'src/app/domain/DTO/product';
import { CartStorageService } from 'src/app/application/services/cart-storage.service';
import { GeolocationService } from 'src/app/application/services/geolocation.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  total: number = 0;
  products!: CarProductDto[] | null;
  position!: string;

  constructor(private cartStorageService: CartStorageService, private geoLocationService: GeolocationService ) { 
  }
  
  async ionViewWillEnter() {
    await this.printGeolocation()
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

  removeProduct(productId:string):void {
    this.products = this.products!.filter(product => product._id !== productId);
    this.calculateTotal();
  }

  async printGeolocation() {
    this.position = await this.geoLocationService.printGeolocation();
  }

}
