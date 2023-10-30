import { Component,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStorageService } from './application/services/product-storage.service';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private productStorageService: ProductStorageService,
    private ngZone: NgZone,
    private router: Router
    ) {}

  ngOnInit() {
    this.initializeApp();
  }
  
  initializeApp() {
    App.addListener('appUrlOpen', (data: URLOpenListenerEvent) => {
      this.ngZone.run(() => {
        const slug = data.url.split(this.getUrlScheme())[1];
        if (slug) {
          this.navigateToslug(slug);
        }
      });
    });
  }


  private navigateToslug(slug: string) {
    this.router.navigateByUrl(slug);
  }

  private getUrlScheme(): string {
    return process.env['URL_SCHEME']!;
  }
}