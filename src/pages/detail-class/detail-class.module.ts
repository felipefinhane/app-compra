import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailClassPage } from './detail-class';

@NgModule({
  declarations: [
    DetailClassPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailClassPage),
  ],
})
export class DetailClassPageModule {}
