import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { ListSeminarPage } from '../list-seminar-page/list-seminar-page'
import { StudentChangePage } from '../student-change-page/student-change-page'
import { ViewedSeminarPage } from '../viewed-seminar-page/viewed-seminar-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get("name");
    console.log(this.name);
  }

  listSeminar() {
    this.navCtrl.push(ListSeminarPage, this.navParams);
  }

  studentChange() {
    this.navCtrl.push(StudentChangePage, this.navParams);
  }

  viewedSeminar() {
    this.navCtrl.push(ViewedSeminarPage, this.navParams);
  }

  exit() {
    console.log("Estudante finalizou a sessão.");
    this.navCtrl.setRoot(LoginPage);
  }
}
