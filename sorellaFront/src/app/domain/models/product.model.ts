export interface Product{
    _id:string;
    nombre:string;
    estado:boolean;
    precio:number;
    usuario:string;
    categoria:string;
    colores:string[];
    descripcion:string;
    disponible:boolean;
    imagenes:[{
        url:string;
        posicion:number;
    }];
}