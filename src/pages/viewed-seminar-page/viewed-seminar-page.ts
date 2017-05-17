import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ViewedSeminarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-viewed-seminar-page',
  templateUrl: 'viewed-seminar-page.html',
})
export class ViewedSeminarPage {

  private url: string = "http://207.38.82.139:8001/attendence/listSeminars";
  private urlGetName: string = "http://207.38.82.139:8001/seminar/get/";
  public feeds: any;
  public nusp: string;
  public names: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.nusp = this.navParams.get("nusp");
  }

  ionViewDidEnter() {
    let form = new FormData();

    form.append("nusp", this.nusp);

    this.http.post(this.url, form).map(res=>res.json()).subscribe(data=>{
        console.log("A requisição post para listar seminários funcionou");
        console.log(data.data);
        this.feeds = data.data;
        this.getNameSeminar();
      }, err=>{
        console.log("Error!:", err.json());
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewedSeminarPage');
  }

  getNameSeminar() {
    let n : Array<string> = [];
    // Get seminar by ids
    console.log(this.feeds)

    if (this.feeds != undefined) {
      for (let f of this.feeds) {
        let name: string;
        console.log(f.seminar_id);
        // Get seminar names
        this.http.get(this.urlGetName+""+f.seminar_id).map(res =>
          res.json()
        )
        .subscribe(data => {
          console.log("Resposta da requisição");
          console.log(data.data);
          name = data.data.name;
          // Add seminar name to list
          n.push(name);
        });
      }
      this.names = n;
    }
    else {
      this.names = undefined;
    }
  }

}
