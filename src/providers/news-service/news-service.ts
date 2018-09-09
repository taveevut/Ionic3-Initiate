import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { News } from '../../models/news'; //import model News เข้ามาใช้งาน


@Injectable()
export class NewsServiceProvider {

  constructor(public http: Http) { }

  //ดึงข้อมูลจาก Backend โดยระบุเลือกข้อมูลเฉพาะส่วนของ articles เท่านั้น <News[]>res.json().articles
  getNews(): Observable<News[]> {
    return this.http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=ab0d4aca4cea481e8157d31c68eb2b23')
      .map((res: Response) => <News[]>res.json().articles)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจากServer');
  }

}
