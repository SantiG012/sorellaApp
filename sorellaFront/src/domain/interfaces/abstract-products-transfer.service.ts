import { Observable } from 'rxjs';

export abstract class AbstractProductsTransferService<T> {
  abstract getProducts(): Observable<T>;
  abstract setProducts(text: T): void;
}