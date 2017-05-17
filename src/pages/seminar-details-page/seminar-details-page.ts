import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { SeminarChangePage } from '../seminar-change-page/seminar-change-page';
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
  public title: string;
  public id: string;
  public students: any;
  public newStudents: any;
  public oldStudents: any;
  public qrcode: any;
  private url: string = "http://207.38.82.139:8001/attendence/listStudents";
  private urlRemoveSeminar: string = "http://207.38.82.139:8001/seminar/delete";
  private getSeminar: string = "http://207.38.82.139:8001/seminar/get/";
  private getStudent: string = "http://207.38.82.139:8001/student/get/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private barcode: BarcodeScanner, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.title = this.navParams.get("name");
    this.id = this.navParams.get("id");
  }

  ionViewDidEnter() {
    // Get student data
    this.http.get(this.getSeminar+""+this.id).map(res =>
      res.json()
    )
    .subscribe(data => {
      console.log("o que recebi");
      console.log(data);
      this.title = data.data.name;
    });

    let form = new FormData();

    form.append("seminar_id", this.id);

    this.students = null;
    this.http.post(this.url, form).map(res =>
      res.json()
    )
    .subscribe(data => {
      console.log("Resposta do post alunos do seminario");
      console.log(data);
      if (data.data != undefined) {
          this.students = data.data;
          console.log(data.data.student_nusp);
          this.getNameStudents();
      }
      else {
        console.log("Não há conteúdo no data");
      }
    }, err=>{
      console.log("Error!:", err.json());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeminarDetailsPage');
  }

  showQRCode() {
      this.qrcode = this.barcode.encode(this.barcode.Encode.TEXT_TYPE, "" + this.id );
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
            let form = new FormData();

            form.append("id", this.id);

            this.http.post(this.urlRemoveSeminar, form).map(res =>
              res.json()
            )
            .subscribe(data => {
              console.log("Removendo seminário");
              this.presentToastSuccess();
            }, err=>{
              console.log("Error!:", err.json());
              this.presentToastFailed();
            });
          }
        }
      ]
    });
    confirm.present();
  }

  changeSeminar(id) {
    this.navCtrl.push(SeminarChangePage, this.navParams);
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

  presentToastSuccessConfirm() {
    let toast = this.toastCtrl.create({
      message: 'Aluno confirmado com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  presentToastFailedConfirm() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível confirmar o aluno.',
      duration: 2000
    });
    toast.present();
  }

  getNameStudents() {
    let nOld : Array<any> = [];
    let nNew : Array<any> = [];
    // Get seminar by ids
    console.log(this.students)

    if (this.students != undefined) {
      for (let s of this.students) {
        let name: string;
        console.log(s.student_nusp);
        // Get seminar names
        this.http.get(this.getStudent+""+s.student_nusp).map(res =>
          res.json()
        )
        .subscribe(data => {
          console.log("Resposta da requisição");
          console.log(data.data);
          name = data.data.name;

          // Add seminar name to list

          if (s.confirmed == 1) {
            nOld.push({"nusp":s.student_nusp,"name":name});
          }
          else {
            nNew.push({"nusp":s.student_nusp,"name":name});
          }
          console.log(name);
        });
      }
      this.oldStudents = nOld;
      this.newStudents = nNew;
    }
    else {
      this.oldStudents = undefined;
    }
  }

  confirmStudent(nusp) {
    console.log("Vou confirmar o nusp: "+nusp);
    // Confirmar operação
    let confirm = this.alertCtrl.create({
      title: 'Confirmar aluno',
      message: 'Você realmente deseja confirmar este aluno?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não confirmou o aluno');
            return;
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Confirmou o aluno');

            let urlConfirm = "http://207.38.82.139:8001/attendence/submit";

            let form = new FormData();
            form.append("nusp", nusp);
            form.append("seminar_id", this.id);
            form.append("confirmed",1);

            this.http.post(urlConfirm, form).map(res=>res.json()).subscribe(data=>{
                console.log(data);
                if(data.message == null) {
                  console.log("Pedido de confirmação enviado com sucesso");
                  this.presentToastSuccessConfirm();
                  this.ionViewDidEnter();
                }
                else {
                  console.log("Não foi enviar o pedido de confirmação");
                  this.presentToastFailedConfirm();
                }
              }, err=>{
                console.log("Error!:", err.json());
              });
          }
        }
      ]
    });
    confirm.present();

  }

}
