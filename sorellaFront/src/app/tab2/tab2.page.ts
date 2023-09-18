import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AbstractProductService } from 'src/application/abstractions';
import { Product } from 'src/domain/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchInput!: string;
  private searchTerms = new Subject<string>();
  productsNames$!:Observable<string[]>;
  products$!:Observable<Product[]>;

  constructor(
    private productService: AbstractProductService
  ) {}

  ngOnInit(){
    this.productsNames$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.getProductsNamesByFilterName(term))
    );
  }

  onInputChange(){
    this.searchTerms.next(this.searchInput);
  }

  onItemClicked(productName:string):void{
    this.products$ = this.productService.getProductsByName(productName);
  }
}
