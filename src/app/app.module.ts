import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomeTeacherPage } from '../pages/home-teacher-page/home-teacher-page';
import { ListSeminarPage } from '../pages/list-seminar-page/list-seminar-page';
import { ListSeminarTeacherPage } from '../pages/list-seminar-teacher-page/list-seminar-teacher-page';
import { StudentChangePage } from '../pages/student-change-page/student-change-page';
import { StudentRegisterPage } from '../pages/student-register-page/student-register-page';
import { TeacherChangePage } from '../pages/teacher-change-page/teacher-change-page';
import { TeacherRegisterPage } from '../pages/teacher-register-page/teacher-register-page';
import { SeminarDetailsPage } from '../pages/seminar-details-page/seminar-details-page';
import { SeminarRegisterPage } from '../pages/seminar-register-page/seminar-register-page';
import { BarcodeScannerPage } from '../pages/barcode-scanner-page/barcode-scanner-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HomeTeacherPage,
    ListSeminarPage,
    ListSeminarTeacherPage,
    StudentChangePage,
    StudentRegisterPage,
    TeacherChangePage,
    TeacherRegisterPage,
    SeminarDetailsPage,
    SeminarRegisterPage,
    BarcodeScannerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HomeTeacherPage,
    ListSeminarPage,
    ListSeminarTeacherPage,
    StudentChangePage,
    StudentRegisterPage,
    TeacherChangePage,
    TeacherRegisterPage,
    SeminarDetailsPage,
    SeminarRegisterPage,
    BarcodeScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
