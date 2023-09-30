import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent<T>  implements OnInit {
  @Input() 
  product!: T;

  @Input()
  productTemplate?:TemplateRef<any>;

  @Output()
  clickedProduct = new EventEmitter<T>();

  constructor() { }

  ngOnInit() {}

  onProductClick() {
    this.clickedProduct.emit(this.product);
  }

}
