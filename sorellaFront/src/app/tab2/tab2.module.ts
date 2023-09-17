import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AbstractTextTransferService } from 'src/domain/interfaces';
import { TextTransferService } from 'src/utilities/shared';
import { AbstractProductsTransferService } from 'src/domain/interfaces/abstract-products-transfer.service'; 
import { ProductsTransferService } from 'src/utilities/shared';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [
    Tab2Page,
    SearchBarComponent,
    ProductListComponent
  ],
  providers: [
    {provide:AbstractTextTransferService, useClass: TextTransferService},
    {provide:AbstractProductsTransferService, useClass: ProductsTransferService}
  ]
})
export class Tab2PageModule {}
