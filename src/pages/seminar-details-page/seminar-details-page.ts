import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { BarcodeScannerPage } from '../barcode-scanner-page/barcode-scanner-page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


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
  id: string;
  students: any;
  newStudents: any;
  qrcode: any;
  url: string = "http://207.38.82.139:8001/attendence/listStudents";
  urlRemoveSeminar: string = "http://207.38.82.139:8001/seminar/delete";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private barcode: BarcodeScanner, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.title = this.navParams.get("name");
    this.id = this.navParams.get("id");

    let data = new FormData();

    data.append("seminar_id", this.id);

    this.students = null;
    this.http.post(this.url, data).map(res =>
      //console.log(res.json());
      res.json()
    )
    .subscribe(data => {
      console.log("Resposta do post alunos do seminario");
      console.log(data);
      if (data != null) {
          this.students = data.data;
          console.log(data.data.student_nusp);
      }
      else {
        console.log("data é undefined");
      }
    }, err=>{
      console.log("Error!:", err.json());
      console.log("DEU ERRADO");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeminarDetailsPage');
  }

  confirmQRCode(id) {
    this.navCtrl.push(BarcodeScannerPage, id);
  }

  showQRCode() {
      this.qrcode = this.barcode.encode(this.barcode.Encode.TEXT_TYPE, "" + this.id );
  }

  showNoConfirmed(id) {
    // Pegar a lista de não confirmados
    // Transformar em botão e confirmar
    let data = new FormData();

    data.append("seminar_id", this.id);

    this.newStudents = null;
    this.http.post(this.url, data).map(res =>
      //console.log(res.json());
      res.json()
    )
    .subscribe(data => {
      console.log("Resposta do post alunos nao confirmados do seminario");
      console.log(data);
      if (data != null) {
          this.newStudents = data.data;
          // Pegar apenas os que não foram confirmados
          console.log(data.data.student_nusp);
      }
      else {
        console.log("data é undefined");
      }
    }, err=>{
      console.log("Error!:", err.json());
      console.log("DEU ERRADO");
    });
  }

  removeSeminar(id) {
    // Confirmar operação
    let confirm = this.alertCtrl.create({
      title: 'Remover seminário',
      message: 'Você realmente deseja remover este seminário?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não removeu o seminário');
            return;
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Removeu o seminário');

            // Remover seminário
            let data = new FormData();

            data.append("id", this.id);

            this.http.post(this.urlRemoveSeminar, data).map(res =>
              //console.log(res.json());
              res.json()
            )
            .subscribe(data => {
              console.log("Removendo seminário");
              console.log(data);
              this.presentToastSuccess()
            }, err=>{
              console.log("Error!:", err.json());
              console.log("DEU ERRADO");
              this.presentToastFailed()
            });

          }
        }
      ]
    });
    confirm.present();

  }

  changeSeminar(id) {
    // Criar nova página???
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Seminário removido com sucesso.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível remover o seminário.',
      duration: 2000
    });
    toast.present();
  }

}
