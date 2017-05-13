import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private barcode: BarcodeScanner) {
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
    // Remover seminário
  }

  changeSeminar(id) {
    // Criar nova página???
  }

}
