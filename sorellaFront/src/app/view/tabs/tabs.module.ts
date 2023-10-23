import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CommonComponentsModule
  ],
  declarations: [TabsPage, HeaderComponent]
})
export class TabsPageModule {}
