export interface CarProductDto {
    _id:string;
    nombre:string;
    precio:number;
    categoria:string;
    colores:string[];
    descripcion:string;
    imagenes:[{
        url:string;
        posicion:number;
    }];
    cantidad:number;
}