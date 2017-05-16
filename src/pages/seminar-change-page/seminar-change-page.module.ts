import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeminarChangePage } from './seminar-change-page';

@NgModule({
  declarations: [
    SeminarChangePage,
  ],
  imports: [
    IonicPageModule.forChild(SeminarChangePage),
  ],
  exports: [
    SeminarChangePage
  ]
})
export class SeminarChangePageModule {}
