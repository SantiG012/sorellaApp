/* import { ProductDto } from "src/domain/DTO/product/product.dto";
import { Mapper } from "src/domain/common";
import { Product } from "src/domain/models";

export class ProductMapper extends Mapper<Product, ProductDto> {
  mapFrom(param: Product): ProductDto {
    return {
        _id:param._id,
        productName:param.productName,
        productPrice:param.productPrice,
        prodcutCategories:param.prodcutCategories
    };
  }
  mapTo(param: ProductDto): Product {
    return {
        _id:param._id,
        productName:param.productName,
        productPrice:param.productPrice,
        prodcutCategories:param.prodcutCategories,
        status:'active'
    };
  }
} */