import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeminarDetailsPage } from './seminar-details-page';

@NgModule({
  declarations: [
    SeminarDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeminarDetailsPage),
  ],
  exports: [
    SeminarDetailsPage
  ]
})
export class SeminarDetailsPageModule {}
