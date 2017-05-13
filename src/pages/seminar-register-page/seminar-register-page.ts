import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SeminarRegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminar-register-page',
  templateUrl: 'seminar-register-page.html',
})
export class SeminarRegisterPage {
  name: string;
  private url: string = "http://207.38.82.139:8001/seminar/add"

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }


    ionViewDidLoad() {
      console.log('ionViewDidLoad SeminarRegisterPage');
    }

  addSeminar() {

    console.log("Adicionando dados de seminário");

    let teste = new FormData();

    teste.append("name", this.name);


    this.http.post(this.url, teste).map(res=>res.json()).subscribe(data=>{
        console.log("DEU CERTO");
        console.log(data);
        if(data.message == null) {
          console.log("Seminário adicionado com sucesso");
          this.presentToastSuccess()
        }
        else {
          console.log("Não foi possível adicionaro seminário");
          this.presentToastFailed();
        }
      }, err=>{
        console.log("Error!:", err.json());
        console.log("DEU ERRADO");
      });

  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Seminário cadastrado com sucesso.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível adicionar o seminário.',
      duration: 2000
    });
    toast.present();
  }

}
