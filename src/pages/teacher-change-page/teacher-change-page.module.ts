import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherChangePage } from './teacher-change-page';

@NgModule({
  declarations: [
    TeacherChangePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherChangePage),
  ],
  exports: [
    TeacherChangePage
  ]
})
export class TeacherChangePageModule {}
