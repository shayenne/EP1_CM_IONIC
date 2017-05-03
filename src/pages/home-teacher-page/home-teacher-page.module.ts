import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTeacherPage } from './home-teacher-page';

@NgModule({
  declarations: [
    HomeTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTeacherPage),
  ],
  exports: [
    HomeTeacherPage
  ]
})
export class HomeTeacherPageModule {}
