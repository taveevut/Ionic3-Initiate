import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: string;
  name: string;
  password: string;

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {

  }

  doSave() {
    var url = 'https://nakomah.com/api/httpapi.php';
    let fdata = new FormData();
    fdata.append('email', this.email);
    fdata.append('name', this.name);
    fdata.append('password', this.password);

    this.data = this.http.post(url, fdata);
    this.data.subscribe(data => {
      this.data.subscribe(data => {
        let alert = this.alertCtrl.create({
          subTitle: data.message,
          buttons: ['OK']
        });
        alert.present();

        this.email = '';
        this.name = '';
        this.password = '';
      });
    });
  }

}
