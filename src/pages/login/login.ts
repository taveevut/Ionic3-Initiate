import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {

  }

  doLogin() {
    var url = 'https://nakomah.com/api/httpapi_login.php';
    let postData = new FormData();
    postData.append('email', this.email);
    postData.append('password', this.password);
    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {
      let alert = this.alertCtrl.create({
        subTitle: data.message,
        buttons: ['OK']
      });
      alert.present();

      this.email = '';
      this.password = '';
    });
  }

}
