import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeminarDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminar-details-page',
  templateUrl: 'seminar-details-page.html',
})
export class SeminarDetailsPage {
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("name");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeminarDetailsPage');
  }

}
