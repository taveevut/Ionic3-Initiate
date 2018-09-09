import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
  newItem: string;
  todos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidEnter() {
    this.todosLoad();
  }

  // ionViewWillLeave() {
  //   this.storage.remove('todosItem'); //หากออกจากเพจนี้ก็ให้ลบ key ด้วย
  // }

  todosSave() {
    if (this.newItem !== "" && this.newItem !== undefined) {
      this.todos.push(this.newItem);
      this.storage.ready().then(() => { //ถ้า platform พร้อมใช้งาน
        // set a key/value
        //กำหนด และ set ค่า key เป็น todosItem และค่า value เป็น Array
        this.storage.set('todosItem', this.todos);
      });
      this.newItem = '';
    }
  }

  onSuccess(index) {
    this.todos.splice(index, 1);
    this.storage.set('todosItem', this.todos);
  }

  todosLoad() {
    //เราสามารถเรียกใช้ค่านี้ได้จากทุกๆเพจ โดยอ้างชื่อ key นั่นก็คือ todosItem
    this.storage.get('todosItem').then((val) => {
      if (val !== null) {
        this.todos = val;
      }
      else {
        this.todos = [];
      }

    });
  }

}
