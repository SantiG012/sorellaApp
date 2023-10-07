import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    CommonComponentsModule
  ],
  declarations: [
    Tab2Page,
    ProductDetailComponent
  ],
  providers: [
  ]
})
export class Tab2PageModule {}
