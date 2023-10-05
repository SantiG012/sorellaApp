import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/models';
import { AbstractProductRepository } from 'src/app/domain/repositories/product.repository';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductImplementationRepository implements AbstractProductRepository {

  constructor(private http:HttpClient) { }

  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${process.env['API_URL']}/buscar/productos/${name}`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${process.env['API_URL']}/buscar/producto/${id}`);
  }
}
