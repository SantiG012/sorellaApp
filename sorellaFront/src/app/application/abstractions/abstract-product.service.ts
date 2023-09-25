import { Observable } from "rxjs";
import { Product } from "src/app/domain/models";

export abstract class AbstractProductService {
    abstract getProductsByName(name:string): Observable<Product[]>;
}