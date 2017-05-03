import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSeminarPage } from './list-seminar-page';

@NgModule({
  declarations: [
    ListSeminarPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSeminarPage),
  ],
  exports: [
    ListSeminarPage
  ]
})
export class ListSeminarPageModule {}
