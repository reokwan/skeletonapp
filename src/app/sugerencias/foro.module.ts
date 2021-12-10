import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ForoPageRoutingModule } from './home-routing.module';

import { ForoComponent } from './foro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoPageRoutingModule
  ],
  declarations: [ForoComponent]
})
export class ForoPageModule {}
