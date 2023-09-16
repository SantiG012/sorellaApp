import { Component, OnInit } from '@angular/core';
import { AbstractTextTransfer } from 'src/domain/interfaces';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent  implements OnInit {

  searchInput!: string;

  constructor(private textTransferService:AbstractTextTransfer<string>) { }

  ngOnInit() {}

  onInputChange(){
    this.textTransferService.setText(this.searchInput);
  }

}
