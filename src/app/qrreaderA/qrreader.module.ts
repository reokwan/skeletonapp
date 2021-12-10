import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { QrreaderPageRoutingModule } from './qrreader-routing.module';

import { QrreaderComponent } from './qrreader.component';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrreaderPageRoutingModule
  ],
  declarations: [QrreaderComponent]
})
export class QrreaderPageModule {}
