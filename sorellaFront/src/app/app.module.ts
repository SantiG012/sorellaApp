import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractProductService } from 'src/application/abstractions';
import { ProductService } from 'src/application/services';
import { ProductRepository } from 'src/domain/repositories';
import { ProductImplementationRepository } from 'src/application/repositories';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide:AbstractProductService, useClass:ProductService },
    { provide: ProductRepository, useClass:ProductImplementationRepository }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
