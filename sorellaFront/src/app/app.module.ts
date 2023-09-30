import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractProductService } from 'src/app/application/abstractions';
import { ProductService } from 'src/app/application/services';
import { AbstractProductRepository } from 'src/app/domain/repositories';
import { ProductImplementationRepository } from 'src/app/infrastructure/repositories';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide:AbstractProductService, useClass:ProductService },
    { provide: AbstractProductRepository, useClass:ProductImplementationRepository }
  ],

  bootstrap: [AppComponent],})
  
export class AppModule {}
