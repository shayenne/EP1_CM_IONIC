import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareService } from './ShareService';

@NgModule({
  declarations: [
    ShareService,
  ],
  imports: [
    IonicPageModule.forChild(ShareService),
  ],
  exports: [
    ShareService
  ],
  providers: [ShareService]
})
export class ShareServiceModule {}
