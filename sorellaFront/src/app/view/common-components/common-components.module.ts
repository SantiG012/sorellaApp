import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FabComponent } from './fab/fab.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ProductComponent,
    FabComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ProductComponent,
    FabComponent
    ]
})
export class CommonComponentsModule { }
