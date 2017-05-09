import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSeminarTeacherPage } from './list-seminar-teacher-page';

@NgModule({
  declarations: [
    ListSeminarTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSeminarTeacherPage),
  ],
  exports: [
    ListSeminarTeacherPage
  ]
})
export class ListSeminarTeacherPageModule {}
