import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractProductsTransferService } from 'src/domain/interfaces/abstract-products-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsTransferService<T> implements AbstractProductsTransferService<T>{

  constructor() { }
  override getProducts(): Observable<T> {
    throw new Error('Method not implemented.');
  }
  override setProducts(text: T): void {
    throw new Error('Method not implemented.');
  }
}
