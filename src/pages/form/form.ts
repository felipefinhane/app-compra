import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUser } from '../../interfaces/IUser';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  userData:IUser = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

  addUser() {
    this.userProvider.add(this.userData)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log("Erro ao inserir usuário. " + err.message);
      })
  }

}
