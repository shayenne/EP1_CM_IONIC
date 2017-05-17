import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListSeminarTeacherPage } from '../list-seminar-teacher-page/list-seminar-teacher-page';
import { TeacherChangePage } from '../teacher-change-page/teacher-change-page';
import { TeacherRegisterPage } from '../teacher-register-page/teacher-register-page';
/**
 * Generated class for the HomeTeacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-teacher-page',
  templateUrl: 'home-teacher-page.html',
})
export class HomeTeacherPage {

  nav: any;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
    this.name = this.navParams.get("name");
    console.log(this.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTeacherPage');
  }

  listSeminar() {
    this.nav.push(ListSeminarTeacherPage);
  }

  teacherChange() {
    this.nav.push(TeacherChangePage, this.navParams);
  }

  teacherAdd() {
    this.nav.push(TeacherRegisterPage);
  }


  exit() {
    console.log("Professor finalizou a sessão.");
    this.nav.setRoot(LoginPage);
  }

}
