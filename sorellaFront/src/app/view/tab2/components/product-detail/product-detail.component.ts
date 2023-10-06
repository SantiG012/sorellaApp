import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { AbstractProductService } from 'src/app/application/abstractions';
import { Product } from 'src/app/domain/models';
import { Location } from '@angular/common';

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
    private readonly location: Location
  ) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.getProductById(id!).pipe(
      tap(product => {
        product.imagenes = product.imagenes.sort((a, b) => a.posicion - b.posicion);
        this.product = product;
        this.isProductLoaded = true;
      }),
      catchError(err => {
        console.error("Mierda hijueputa",err);
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

}
