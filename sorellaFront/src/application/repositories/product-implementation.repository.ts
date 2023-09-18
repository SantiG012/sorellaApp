import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/domain/models';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductImplementationRepository implements ProductRepository {

  constructor(private http:HttpClient) { }

  getProductsByName(name: string): Observable<Product[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Product[]>(`${process.env['API_URL']}/products`, {params});
  }

  getProductsNamesByFilterName(name: string): Observable<string[]> {
    const params = new HttpParams().set('filter', name);
    return this.http.get<string[]>(`${process.env['API_URL']}/products-names`, {params});
  }
}
