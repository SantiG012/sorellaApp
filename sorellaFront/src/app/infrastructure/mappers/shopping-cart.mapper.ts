import { CarProductDto } from "src/app/domain/DTO/product";
import { AbstractShoppingCartMapper } from "src/app/domain/interfaces/mappers";
import { Product } from "src/app/domain/models";


export class ShoppingCartMapper extends AbstractShoppingCartMapper {
  mapTo(param: CarProductDto): Product {
    throw new Error("Method not implemented.");
  }
  mapFrom(param: Product): CarProductDto {
    return {
        _id:param._id,
        nombre:param.nombre,
        precio:param.precio,
        categoria:param.categoria,
        imagenes:param.imagenes,
        colores:param.colores,
        descripcion:param.descripcion,
        cantidad:1,
    };
  }
}