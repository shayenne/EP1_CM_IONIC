import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScannerPage } from './barcode-scanner-page';

@NgModule({
  declarations: [
    BarcodeScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeScannerPage),
  ],
  exports: [
    BarcodeScannerPage
  ]
})
export class BarcodeScannerPageModule {}
