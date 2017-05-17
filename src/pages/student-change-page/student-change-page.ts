import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
  selector: 'page-student-change-page',
  templateUrl: 'student-change-page.html',
})
export class StudentChangePage {
  public nusp: string;
  public newName: string;
  public newPass: string;
  private url: string = "http://207.38.82.139:8001/student/edit"
  private getStudent: string = "http://207.38.82.139:8001/student/get/"

  params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
    this.nusp = this.navParams.get("nusp");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentChangePage');
  }

  changeData() {
    console.log("Alterando dados de usuário");

    let form = new FormData();

    form.append("nusp", this.nusp);
    form.append("pass", this.newPass);
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
        console.log("DEU ERRADO");
      });
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Dados alterados com sucesso.',
      duration: 2000
    });
    toast.present();
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
      this.navCtrl.setRoot(HomePage, this.params);
    });
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível alterar os dados.',
      duration: 2000
    });
    toast.present();
  }

}
