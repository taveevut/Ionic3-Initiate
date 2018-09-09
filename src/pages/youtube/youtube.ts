import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

  chTitle: string;
  chUrl: string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.chTitle = 'Big Buck Bunny';//this.navParams.get('ch_title');
    this.chUrl = 'https://www.youtube.com/embed/YE7VzlLtp-4';
  }

  ionViewDidLoad() {
    this.chUrlTrusted = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chUrl);
  }

}
