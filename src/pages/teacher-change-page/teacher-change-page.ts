import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the TeacherChangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teacher-change-page',
  templateUrl: 'teacher-change-page.html',
})
export class TeacherChangePage {
  http: any;
  nav: any;

  nusp: string;
  newName: string;
  newPass: string;
  private url: string = "http://207.38.82.139:8001/teacher/edit"

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http, public toastCtrl: ToastController) {
    this.http = http;
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherChangePage');
  }

  changeData() {

    console.log("Alterando dados de usuário");

    let teste = new FormData();

    teste.append("nusp", "1111");
    teste.append("pass", this.newPass);
    teste.append("name", this.newName);


    this.http.post(this.url, teste).map(res=>res.json()).subscribe(data=>{
        console.log("DEU CERTO");
        console.log(data);
        if(data.message == null) {
          console.log("Alterado com sucesso");
          this.presentToastSuccess()
        }
        else {
          console.log("Não foi possível alterar os dados");
          this.presentToastFailed();
        }
      }, err=>{
        console.log("Error!:", err.json());
        console.log("DEU ERRADO");
      });

  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Dados alterados com sucesso.',
      duration: 2000
    });
    toast.present();
    this.nav.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível alterar os dados.',
      duration: 2000
    });
    toast.present();
  }


}
