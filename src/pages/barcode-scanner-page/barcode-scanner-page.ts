import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
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
  public id: any;
  public text: any;
  public format: any;
  public nusp: any;
  public qrConfirm: any = false;
  public errorData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController, public http: Http) {
    this.id = this.navParams.get("id");
    this.nusp = this.navParams.get("nusp");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  ionViewDidEnter() {
    this.qrConfirm = false;
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
     console.log("LIDO DO QRCODE"+barcodeData);
     if (this.id != barcodeData.text) {
       this.errorData = "QR-Code não corresponde ao seminário selecionado";
       return;
     }
     this.format = barcodeData.format;
     this.qrConfirm = true;
     this.confirmSeminar();
    }, (err) => {
      console.log("Err:"+err);
    });
  }

  confirmSeminar() {
    // Send a student confirm to server with flag false
    // Wait teacher confirm manually
    console.log("Quero fazer confirmação");
    let urlConfirm = "http://207.38.82.139:8001/attendence/submit";

    let form = new FormData();
    form.append("nusp", this.nusp);
    form.append("seminar_id", this.id);

    if (this.qrConfirm) {
      console.log("QR true")
      form.append("confirmed",1);
    }
    else {
      form.append("confirmed",0);
    }

    console.log(form);
    this.http.post(urlConfirm, form).map(res=>res.json()).subscribe(data=>{
        console.log(data);
        if(data.message == null) {
          console.log("Pedido de confirmação enviado com sucesso");
          if (this.qrConfirm) {
            this.presentToastSuccessQR();
          }
          else {
            this.presentToastSuccess();
          }
        }
        else {
          console.log("Não foi enviar o pedido de confirmação");
          this.presentToastFailed();
        }
      }, err=>{
        this.errorData = "QR-Code não corresponde a nenhum seminário";
        console.log("Error!:", err.json());
      });
  }

  presentToastSuccess() {
    let toast = this.toastCtrl.create({
      message: 'Pedido de confirmação enviado com sucesso. Aguarde a confirmação do professor.',
      duration: 3000
    });
    toast.present();
    this.navCtrl.pop();
  }

  presentToastSuccessQR() {
    let toast = this.toastCtrl.create({
      message: 'Confirmação enviada com sucesso.',
      duration: 3000
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
