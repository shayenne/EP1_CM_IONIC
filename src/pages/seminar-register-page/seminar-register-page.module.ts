import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeminarRegisterPage } from './seminar-register-page';

@NgModule({
  declarations: [
    SeminarRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(SeminarRegisterPage),
  ],
  exports: [
    SeminarRegisterPage
  ]
})
export class SeminarRegisterPageModule {}
