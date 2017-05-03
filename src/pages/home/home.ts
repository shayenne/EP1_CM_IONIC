import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomeTeacherPage } from '../home-teacher-page/home-teacher-page'
import { ListSeminarPage } from '../list-seminar-page/list-seminar-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  homeTeacherPage = HomeTeacherPage;
  listSeminarPage = ListSeminarPage;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  atalho() {
    this.nav.push(this.homeTeacherPage);
  }

  listSeminar() {
    this.nav.push(this.listSeminarPage);
  }
}
