import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbstractTextTransfer } from 'src/domain/interfaces';
import { TextTransferService } from 'src/application/services/shared/text-transfer.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {provide: AbstractTextTransfer, useClass: TextTransferService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
