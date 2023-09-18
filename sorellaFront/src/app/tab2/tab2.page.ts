import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchInput!: string;
  private searchTerms = new Subject<string>();
  productsNames$!:Observable<string[]>;

  constructor(
    
  ) {}

  ngOnInit(){
    //TODO: Implementar el observable
  }

  onInputChange(){
    this.searchTerms.next(this.searchInput);
  }
}
