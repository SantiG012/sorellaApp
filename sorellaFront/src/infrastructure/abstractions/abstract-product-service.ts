import { Observable } from "rxjs";
import { Product } from "src/domain/models";

export abstract class AbstractProductsTransferService {
    abstract getProductsByName(): Observable<Product[]>;
}