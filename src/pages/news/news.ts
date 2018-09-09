
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { NewsServiceProvider } from '../../providers/news-service/news-service';
//import NewsService เข้ามาใช้งาน
import { News } from '../../models/news'; //import model News เข้ามาใช้งาน
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: Array<News>; // เป็นประกาศตัวแปรแบบ generic (TypeScript) มีค่าเท่ากับ News[]
  sub: Subscription;
  errorMessage: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private newsService: NewsServiceProvider,
    private loadingCtrl: LoadingController
  ) { }
  ionViewWillEnter() {
    this.getNews();
  }
  ionViewWillLeave() {
    this.sub.unsubscribe();
  }
  private getNews() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',
      //spinner: 'dots'
    });
    loading.present(); //เริ่มแสดง Loading
    this.sub = this.newsService.getNews().subscribe(
      (res) => this.news = res,
      (error) => {
        this.errorMessage = <any>error,
          loading.dismiss() //ให้ Loading หายไปกรณีเกิด error
      },
      () => loading.dismiss() //ให้ Loading หายไปกรณีเกิดการทำงานเสร็จสมบูรณ์
    );
  }
}
