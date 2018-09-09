import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { NewsPage } from '../news/news';
import { TodosPage } from '../todos/todos';
import { YoutubePage } from '../youtube/youtube';
import { QrcodePage } from '../qrcode/qrcode';
import { CameraPage } from '../camera/camera';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNews() {
    this.navCtrl.push(NewsPage);
  }

  goToTodos() {
    this.navCtrl.push(TodosPage);
  }

  goToYoutube() {
    this.navCtrl.push(YoutubePage);
  }

  goToLazyLoading() {
    this.navCtrl.push("LazyloadingPage");
  }
  goToAccount() {
    this.navCtrl.push(AccountPage);
  }

  goToCamera() {
    this.navCtrl.push(CameraPage);
  }

  goToQrCode() {
    this.navCtrl.push(QrcodePage);
  }
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
