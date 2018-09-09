import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyloadingPage } from './lazyloading';

@NgModule({
  declarations: [
    LazyloadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyloadingPage),
  ],
})
export class LazyloadingPageModule {}
