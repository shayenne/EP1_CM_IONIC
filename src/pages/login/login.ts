import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { TabsPage } from '../tabs/tabs'
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  //public rootPage = TabsPage;
  public user: string;
  public nusp: string;
  public pass: string;
  public nav: NavController;
  public data: Array<string>;
  public feeds: Array<string>;
  private urlStudent: string = "http://207.38.82.139:8001/login/student";
  private urlTeacher: string = "http://207.38.82.139:8001/login/teacher";
  //private url: string = "https://www.reddit.com/new.json";


  public body: any;
  public headers: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.nav = navCtrl;
    this.user = "Aluno";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  clicked() {
      console.log('CLICKED!!'+ this.user);

      this.data = [this.nusp, this.pass];

      // Variables for post request
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin','*');
      let options= new RequestOptions({headers: headers});

      var data = JSON.stringify({
        nusp:this.nusp,
        pass: this.pass
      });

      console.log(data);

      if (this.user == "Aluno") {
        this.http.post(this.urlStudent, data, options).map(res=>res.json()).subscribe(data=>{
          console.log(data)
        }, err=>{
          console.log("Error!:", err.json());
        });
      }
      else {
          console.log("Ainda não implementado!!!");
      }

      this.nav.setRoot(HomePage);
  }

  setUser(value) {
    console.log(value);
    this.user=value;
  }

}
