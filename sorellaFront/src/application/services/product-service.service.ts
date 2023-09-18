import { Injectable } from '@angular/core';
import { AbstractProductService } from '../abstractions';
import { Observable } from 'rxjs';
import { Product } from 'src/domain/models';
import { ProductRepository } from 'src/domain/repositories';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements AbstractProductService {

  constructor(
    private productRepository:ProductRepository
  ) { }

  getProductsByName(name: string): Observable<Product[]> {
    return this.productRepository.getProductsByName(name);
  }

  getProductsNamesByFilterName(name: string): Observable<string[]> {
    return this.productRepository.getProductsNamesByFilterName(name);
  }
}
