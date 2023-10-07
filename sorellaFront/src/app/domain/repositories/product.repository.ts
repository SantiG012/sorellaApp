import { Observable } from "rxjs";
import { Product } from "../models"; 

export abstract class  AbstractProductRepository {
    abstract getProductsByName(name: string): Observable<Product[]>;
    abstract getProductById(id: string): Observable<Product>;
}