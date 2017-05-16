import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewedSeminarPage } from './viewed-seminar-page';

@NgModule({
  declarations: [
    ViewedSeminarPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewedSeminarPage),
  ],
  exports: [
    ViewedSeminarPage
  ]
})
export class ViewedSeminarPageModule {}
