import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
