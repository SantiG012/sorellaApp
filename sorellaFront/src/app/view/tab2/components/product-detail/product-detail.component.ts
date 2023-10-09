import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { AbstractProductService } from 'src/app/application/abstractions';
import { Product } from 'src/app/domain/models';
import { CarProductDto } from 'src/app/domain/DTO/product'; 
import { Location } from '@angular/common';
import { CartStorageService } from 'src/app/application/services/cart-storage.service';
import { ShoppingCartMapperService } from 'src/app/infrastructure/mappers/shopping-cart-mapper.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  isProductLoaded: boolean = false;
  product!: Product;
  selectedImageIndex: number = 0;

  constructor(
    private readonly productService: AbstractProductService,
    private readonly router: ActivatedRoute,
    private readonly location: Location,
    private readonly cartStorageService: CartStorageService,
    private readonly ShoppingCartMapper: ShoppingCartMapperService,
  ) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.getProductById(id!).pipe(
      tap(product => {
        product = this.sortProductImages(product);
        this.setProduct(product);
        this.isProductLoaded = true;
      }),
      catchError(err => {
        console.error(err);
        return new Observable<Product>();
      })
    ).subscribe();
  }

  selectImage(index: number):void {
    this.selectedImageIndex = index;
  }

  isSelectedImage(index: number): boolean {
    return this.selectedImageIndex === index;
  }

  goBack(): void {
    this.location.back();
  }

  private sortProductImages(product: Product): Product {
    product.imagenes = product.imagenes.sort((a, b) => a.posicion - b.posicion);
    return product;
  }

  private setProduct(product: Product): void {
    this.product = product;
  }

  async addProductToCart(product: Product){
    const carProductDto:CarProductDto = this.ShoppingCartMapper.mapFrom(product);
    await this.cartStorageService.addProductToCart(carProductDto);
  }

}
