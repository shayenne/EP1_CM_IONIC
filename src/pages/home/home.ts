import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../login/login'
import { ListSeminarPage } from '../list-seminar-page/list-seminar-page'
import { StudentChangePage } from '../student-change-page/student-change-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // http://207.38.82.139:8001/teacher/get/[:nusp]
//curl -H "Content-Type: application/json" -X POST -d '{"nusp":4321,"pass":4321, "name":"Doctor Who"}' http://207.38.82.139:8001/teacher/add
  nav: NavController;
  listSeminarPage = ListSeminarPage;
  studentChangePage = StudentChangePage;
  name: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
    this.name = this.navParams.get("name");
    console.log(this.name);
  }

  listSeminar() {
    this.nav.push(this.listSeminarPage, this.navParams);
  }

  studentChange() {
    this.nav.push(this.studentChangePage, this.navParams);
  }

  exit() {
    console.log("Estudante finalizou a sessão.");
    this.nav.setRoot(LoginPage);
  }
}
