import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the SeminarDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 /*
 Buscar Seminário
 http://207.38.82.139:8001/seminar/get/[:id]
 Método: GET

 Adicionar Seminário
 http://207.38.82.139:8001/seminar/add
 Método: POST
 Parãmetros: {name}

 Alterar Seminário
 http://207.38.82.139:8001/seminar/edit
 Método: POST
 Parãmetros: {id, name}

 Remover Seminário
 http://207.38.82.139:8001/seminar/delete
 Método: POST
 Parâmetros: {id}
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
  url: string = "http://207.38.82.139:8001/attendence/listStudents";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.title = this.navParams.get("name");
    this.id = this.navParams.get("id");

    this.students = null;
    this.http.post(this.url, {"id":this.id}).map(res =>
      //console.log(res.json());
      res.json()
  )
  .subscribe(data => {
    console.log("o que recebi");
    console.log(data);
    this.students = data.data;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeminarDetailsPage');
  }

}
