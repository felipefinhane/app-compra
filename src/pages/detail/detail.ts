import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailClassPage } from '../detail-class/detail-class';

import { ICourse } from '../../interfaces/ICourse';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  dataItem: ICourse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataItem = this.navParams.get('dataItem');
  }

  ionViewDidLoad() {
  }

  openLesson(dataLesson){
    this.navCtrl.push(DetailClassPage, {dataItem:dataLesson});
  }

}
