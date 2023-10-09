import { Component } from '@angular/core';
import { ProductStorageService } from './application/services/product-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private productStorageService: ProductStorageService) {}
}
