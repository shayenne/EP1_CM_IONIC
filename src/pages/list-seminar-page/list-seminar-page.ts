import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BarcodeScannerPage } from '../barcode-scanner-page/barcode-scanner-page';

/**
 * Generated class for the ListSeminarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-seminar-page',
  templateUrl: 'list-seminar-page.html',
})
export class ListSeminarPage {

  public feeds: Array<string>;
  private url: string = "http://207.38.82.139:8001/seminar";
  nusp: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.nusp = this.navParams.get("nusp");

  }

  ionViewDidEnter() {
    this.http.get(this.url).map(res =>
      //console.log(res.json());
      res.json()
    )
    .subscribe(data => {
      console.log("o que recebi");
      console.log(data);
      this.feeds = data.data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSeminarPage');
  }

  details(item) {
    console.log(item);
    this.navCtrl.push(BarcodeScannerPage, item.concat({"nusp":this.nusp}));
  }

}
