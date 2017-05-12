import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode-scanner-page',
  templateUrl: 'barcode-scanner-page.html',
})
export class BarcodeScannerPage {
  id: any;
  text: any;
  format: any;
  nusp: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController, public http: Http) {
    this.id = this.navParams.get("id");
    this.nusp = this.navParams.get("nusp");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
     console.log("LIDO DO QRCODE"+barcodeData);
     this.text = barcodeData.text;
     this.format = barcodeData.format;
    }, (err) => {
      console.log("Err:"+err);
    });
  }

  manualConfirm() {
    // Send a student confirm to server with flag false
    // Wait teacher confirm manually
    let urlConfirm = "http://207.38.82.139:8001/attendence/submit"
    let data = new FormData();

    data.append("nusp", this.nusp);
    data.append("pass", this.id);
    data.append("data", "{confirmed:0}");

    this.http.post(urlConfirm, data).map(res=>res.json()).subscribe(data=>{
        console.log("DEU CERTO");
        console.log(data);
        if(data.message == null) {
          console.log("Pedido de confirmação enviado com sucesso");
          this.presentToastSuccess();
        }
        else {
          console.log("Não foi enviar o pedido de confirmação");
          this.presentToastFailed();
        }
      }, err=>{
        console.log("Error!:", err.json());
        console.log("DEU ERRADO");
      });
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Pedido de confirmação enviado com sucesso. Aguarde a confirmação do professor.',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastFailed() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível enviar o pedido de confirmação.',
      duration: 2000
    });
    toast.present();
  }

}
