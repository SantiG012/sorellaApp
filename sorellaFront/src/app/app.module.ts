import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractProductService } from './application/abstractions';
import { ProductService } from 'src/app/application/services';
import { AbstractProductRepository } from 'src/app/domain/repositories';
import { ProductImplementationRepository } from 'src/app/infrastructure/repositories';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractProductStorageService } from './domain/services/storage/abstract-product-storage.service';
import { ProductStorageService } from './application/services/product-storage.service';
import { CartStorageService } from './application/services/cart-storage.service';



@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule,
    IonicStorageModule.forRoot()
    ],
  providers: [
    {provide: CartStorageService, useClass: CartStorageService},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide:AbstractProductService, useClass:ProductService },
    { provide: AbstractProductRepository, useClass:ProductImplementationRepository },
    { provide:AbstractProductStorageService, useClass:ProductStorageService }
  ],

  bootstrap: [AppComponent],})
  
export class AppModule {}
