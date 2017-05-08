import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentChangePage } from './student-change-page';

@NgModule({
  declarations: [
    StudentChangePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentChangePage),
  ],
  exports: [
    StudentChangePage
  ]
})
export class StudentChangePageModule {}
