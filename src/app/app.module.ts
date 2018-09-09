import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewsServiceProvider } from '../providers/news-service/news-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { NewsPage } from '../pages/news/news';
import { TodosPage } from '../pages/todos/todos';
import { YoutubePage } from '../pages/youtube/youtube';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrcodePageModule } from '../pages/qrcode/qrcode.module';
import { CameraPage } from '../pages/camera/camera';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    NewsPage,
    CameraPage,
    TodosPage,
    YoutubePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    QrcodePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    NewsPage,
    CameraPage,
    TodosPage,
    YoutubePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsServiceProvider,
  ]
})
export class AppModule { }
