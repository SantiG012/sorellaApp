import { Observable } from "rxjs";
import { Product } from "../models"; 

export abstract class  ProductRepository {
    abstract getProductsByName(name: string): Observable<Product[]>;
}