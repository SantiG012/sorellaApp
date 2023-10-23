import { CarProductDto } from "../../DTO/product";
import { Mapper } from "../../common";
import { Product } from "../../models";

export abstract class AbstractShoppingCartMapper extends Mapper<Product, CarProductDto>{ 
}