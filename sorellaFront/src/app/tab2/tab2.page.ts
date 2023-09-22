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
  products = [{"_id":1,"productName":"Nick","productPrice":12.76,"productCategories":1,"status":false},
  {"_id":2,"productName":"Clare","productPrice":44.74,"productCategories":2,"status":true},
  {"_id":3,"productName":"Laurent","productPrice":94.29,"productCategories":3,"status":true},
  {"_id":4,"productName":"Johnathon","productPrice":51.43,"productCategories":4,"status":true},
  {"_id":5,"productName":"Kailey","productPrice":65.92,"productCategories":5,"status":false},
  {"_id":6,"productName":"Nixie","productPrice":58.32,"productCategories":6,"status":false},
  {"_id":7,"productName":"Ignacio","productPrice":79.38,"productCategories":7,"status":false},
  {"_id":8,"productName":"Merissa","productPrice":40.35,"productCategories":8,"status":false},
  {"_id":9,"productName":"Woody","productPrice":18.45,"productCategories":9,"status":false},
  {"_id":10,"productName":"Opal","productPrice":33.15,"productCategories":10,"status":true}]

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
