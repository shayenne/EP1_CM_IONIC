import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the StudentChangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminar-change-page',
  templateUrl: 'seminar-change-page.html',
})
export class SeminarChangePage {
  public seminar_id: string;
  public newName: string;
  private url: string = "http://207.38.82.139:8001/seminar/edit"
  private getSeminar: string = "http://207.38.82.139:8001/seminar/get/"

  public params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
    this.seminar_id = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeminarChangePage');
  }

  changeData() {
    console.log("Alterando dados de seminário");

    let form = new FormData();

    form.append("id", this.seminar_id);
    form.append("name", this.newName);

    this.http.post(this.url, form).map(res=>res.json()).subscribe(data=>{
        console.log("DEU CERTO");
        console.log(data);
        if(data.message == null) {
          console.log("Alterado com sucesso");
          this.presentToastSuccess();
        }
        else {
          console.log("Não foi possível alterar os dados");
          this.presentToastFailed();
        }
      }, err=>{
        console.log("Error!:", err.json());
      });
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Dados alterados com sucesso.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível alterar os dados.',
      duration: 2000
    });
    toast.present();
  }

}
