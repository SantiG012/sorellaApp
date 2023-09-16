import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AbstractTextTransferService } from 'src/domain/interfaces';
import { TextTransferService } from 'src/application/services/shared/text-transfer.service';
import { AbstractProductsTransferService } from 'src/domain/interfaces/abstract-products-transfer.service'; 
import { ProductsTransferService } from 'src/application/services/shared/products-transfer.service';

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
    SearchBarComponent
  ],
  providers: [
    {provide:AbstractTextTransferService, useClass: TextTransferService},
    {provide:AbstractProductsTransferService, useClass: ProductsTransferService}
  ]
})
export class Tab2PageModule {}
