import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  //private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.url).map(res =>
      //console.log(res.json());
      res.json()
  )
  .subscribe(data => {
    console.log("o que recebi");
    console.log(data);
    this.feeds = data.data;
    //console.log(data.name);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSeminarPage');
  }

}