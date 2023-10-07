import { AbstractStorageService } from "../../common";
import { CarProductDto } from "../../DTO/product";

export abstract class AbstractProductStorageService extends AbstractStorageService<CarProductDto[]> {

}