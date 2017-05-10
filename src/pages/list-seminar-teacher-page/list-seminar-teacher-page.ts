import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SeminarDetailsPage } from '../seminar-details-page/seminar-details-page';

/**
 * Generated class for the ListSeminarTeacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-seminar-teacher-page',
  templateUrl: 'list-seminar-teacher-page.html',
})
export class ListSeminarTeacherPage {

  public items: Array<string>;
  private url: string = "http://207.38.82.139:8001/seminar";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
      this.http.get(this.url).map(res =>
        //console.log(res.json());
        res.json()
    )
    .subscribe(data => {
      console.log("o que recebi");
      console.log(data);
      this.items = data.data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSeminarTeacherPage');
  }

  details(item) {
    console.log(item);
    this.navCtrl.push(SeminarDetailsPage, item);
  }

}
