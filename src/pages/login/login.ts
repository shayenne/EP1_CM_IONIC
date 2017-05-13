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
  private getStudent: string = "http://207.38.82.139:8001/student/get/"//[:nusp]
  private getTeacher: string = "http://207.38.82.139:8001/teacher/get/"//[:nusp]


  public body: any;
  public headers: any;
  public loginFailed: any;
  public http: any;
  public params: any;

  constructor(navCtrl: NavController, navParams: NavParams, http: Http) {
    this.nav = navCtrl;
    this.http = http;
    this.user = "Professor";
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

      let teste = new FormData();

      teste.append("nusp", this.nusp);
      teste.append("pass", this.pass);

      if (this.user == "Aluno") {
        this.http.post(this.urlStudent, teste).map(res=>res.json()).subscribe(data=>{
          console.log("DEU CERTO");
          console.log(data);
          if (data.success) {
            console.log("DEU CERTO MESMO!!");
            // Get student data
            this.http.get(this.getStudent+""+this.nusp).map(res =>
              //console.log(res.json());
              res.json()
            )
            .subscribe(data => {
              console.log("o que recebi");
              console.log(data);
              this.params = data.data;
              console.log(this.params);
              // Need to be here, because post and get are assynchronous
              this.nav.setRoot(HomePage, this.params);
            });

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
            // Get teacher data
            this.http.get(this.getTeacher+""+this.nusp).map(res =>
              //console.log(res.json());
              res.json()
            )
            .subscribe(data => {
              console.log("o que recebi");
              console.log(data);
              this.params = data.data;
              // Need to be here, because post and get are assynchronous
              this.nav.setRoot(HomeTeacherPage, this.params);
            });
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
