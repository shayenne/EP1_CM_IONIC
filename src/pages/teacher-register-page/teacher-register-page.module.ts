import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherRegisterPage } from './teacher-register-page';

@NgModule({
  declarations: [
    TeacherRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherRegisterPage),
  ],
  exports: [
    TeacherRegisterPage
  ]
})
export class TeacherRegisterPageModule {}
