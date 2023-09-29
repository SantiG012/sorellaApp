import { Injectable } from '@angular/core';
import { AbstractProductService } from '../abstractions';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/models';
import { AbstractProductRepository } from 'src/app/domain/repositories';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements AbstractProductService {

  constructor(
    private productRepository:AbstractProductRepository
  ) { }

  getProductsByName(name: string): Observable<Product[]> {
    return this.productRepository.getProductsByName(name);
  }
}
