import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/domain/models';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductImplementationRepository implements ProductRepository {

  constructor(private http:HttpClient) { }

  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${process.env['API_URL']}?name=${name}`);
  }
}
