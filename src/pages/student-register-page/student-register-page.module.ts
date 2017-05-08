import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentRegisterPage } from './student-register-page';

@NgModule({
  declarations: [
    StudentRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentRegisterPage),
  ],
  exports: [
    StudentRegisterPage
  ]
})
export class StudentRegisterPageModule {}
