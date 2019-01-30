import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer} from '@angular/platform-browser';

import { ILesson } from '../../interfaces/ILesson';

@IonicPage()
@Component({
  selector: 'page-detail-class',
  templateUrl: 'detail-class.html',
})
export class DetailClassPage {

  dataClass: ILesson;

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer) {

    this.dataClass = this.navParams.get('dataItem');
  }

  ionViewDidLoad() {
  }

}
