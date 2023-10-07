import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { AbstractProductService } from 'src/app/application/abstractions';
import { Product } from 'src/app/domain/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchInput!: string;
  private searchTerms = new Subject<string>();
  products$!:Observable<Product[]>;

  constructor(
    private productService: AbstractProductService
  ) {}

  ngOnInit(){
    this.products$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((term:string) => term.length > 0),
      switchMap((term:string) => this.productService.getProductsByName(term))
    );
  }

  onInputChange(){
    this.searchTerms.next(this.searchInput);
  }
}
