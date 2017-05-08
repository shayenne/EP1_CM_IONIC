import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  listSeminar() {
    this.nav.push(this.listSeminarPage);
  }

  studentChange() {
    this.nav.push(this.studentChangePage);
  }

  exit() {
    console.log("Estudante finalizou a sessão.");
    this.nav.setRoot(LoginPage);
  }
}
