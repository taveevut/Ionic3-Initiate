import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';//import Camera และ CameraOptions เข้ามาใช้งาน

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.photos = [];
  }


  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'กรุณายืนยันการลบอีกครั้ง ?',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Agree clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  // เป็น method สำหรับถ่ายภาพ พร้อมทั้งกำหนด options ต่างๆให้กับกล้องด้วย
  takePhoto() {
    //กำหนด options ให้กับ Camera
    //ดูรายละเอียด options เพิ่มเติมได้ที่ https://github.com/apache/cordova-plugincamera#cameraoptions-errata
    const options: CameraOptions = {
      quality: 80, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      //เลือก sourceType เป็นกล้อง หรือหากต้องการเลือกจาก Gallery ก็ใช้ sourceType:Camera.PictureSourceType.SAVEDPHOTOALBUM
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //เมื่อถ่ายรูปสำเร็จก็จะ encode เป็น base64 แล้วกำหนดให้กับ myImg แล้วนำไปแสดงผลที่ template
      //ในจังหวะนี้เราสามารถใช้ตัวแปร this.base64Image บันทึกเก็บลงฐานข้อมูลได้เลย และให้คอลัมน์ในตารางฐานข้อมูลมีชนิดเป็น TEXT
      //ถ้าเก็บลงฐานข้อมูลแล้ว เราก็สามารถดึงคอลัมน์นี้มาแสดงผลรูปภาพได้ทันที
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

}
