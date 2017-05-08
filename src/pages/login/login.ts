import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { HomeTeacherPage } from '../home-teacher-page/home-teacher-page';
import { StudentRegisterPage } from '../student-register-page/student-register-page';

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

  public body: any;
  public headers: any;
  public loginFailed: any;
  public http: any;

  constructor(navCtrl: NavController, navParams: NavParams, http: Http) {
    this.nav = navCtrl;
    this.http = http;
    this.user = "Aluno";
    this.loginFailed = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  loginUser() {
      console.log('CLICKED!!'+ this.user);

      //Variables for post request
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      let options= new RequestOptions({headers: headers});

      var data = JSON.stringify({
        nusp:this.nusp,
        pass:this.pass
      });

      let teste = new FormData();

      teste.append("nusp", this.nusp);
      teste.append("pass", this.pass);

      if (this.user == "Aluno") {
        this.http.post(this.urlStudent, teste).map(res=>res.json()).subscribe(data=>{
          console.log("DEU CERTO");
          console.log(data);
          if (data.success) {
            console.log("DEU CERTO MESMO!!");
            this.nav.setRoot(HomePage);
          }
          else {
            this.loginFailed = true;
          }
        }, err=>{
          console.log("Error!:", err.json());
          console.log("DEU ERRADO");
        });
      }
      else {
        this.http.post(this.urlTeacher, teste).map(res=>res.json()).subscribe(data=>{
          console.log("DEU CERTO");
          console.log(data)
          if (data.success) {
            console.log("DEU CERTO MESMO!!");
            this.nav.setRoot(HomeTeacherPage);
          }
          else {
            this.loginFailed = true;
          }
        }, err=>{
          console.log("Error!:", err.json());
          console.log("DEU ERRADO");
        });
      }
  }

  setUser(value) {
    console.log(value);
    this.user=value;
  }

  addStudent() {
    this.nav.push(StudentRegisterPage);
  }

}
