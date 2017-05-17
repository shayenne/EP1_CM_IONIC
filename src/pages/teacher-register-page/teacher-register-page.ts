import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the TeacherRegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-register-page',
  templateUrl: 'teacher-register-page.html',
})
export class TeacherRegisterPage {
  public nusp: string;
  public newName: string;
  public newPass: string;
  public newNusp: string;
  private url: string = "http://207.38.82.139:8001/teacher/add"

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherRegisterPage');
  }

  addData() {
    console.log("Alterando dados de usuário");

    let form = new FormData();

    form.append("nusp", this.newNusp);
    form.append("pass", this.newPass);
    form.append("name", this.newName);


    this.http.post(this.url, form).map(res=>res.json()).subscribe(data=>{
        console.log("DEU CERTO");
        console.log(data);
        if(data.message == null) {
          console.log("Professor adicionado com sucesso");
          this.presentToastSuccess()
        }
        else {
          console.log("Não foi possível adicionar o professor");
          this.presentToastFailed();
        }
      }, err=>{
        console.log("Error!:", err.json());
      });
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Professor cadastrado com sucesso.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível adicionar o professor.',
      duration: 2000
    });
    toast.present();
  }

}
