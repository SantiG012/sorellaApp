import { Observable } from "rxjs";
import { Product } from "src/domain/models";

export abstract class AbstractProductService {
    abstract getProductsByName(name:string): Observable<Product[]>;
    abstract getProductsNamesByFilterName(name:string): Observable<string[]>;
}