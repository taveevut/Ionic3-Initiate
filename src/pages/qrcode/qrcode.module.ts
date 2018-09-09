import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodePage } from './qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    QrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodePage),
    NgxQRCodeModule,
  ],
})
export class QrcodePageModule { }
