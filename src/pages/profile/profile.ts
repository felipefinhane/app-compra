import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUser } from '../../interfaces/IUser';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
 
  userData:IUser = {
    name: '',
    email: '',
    password: ''
  };
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {

  }

  ionViewDidLoad() {
    this.userProvider.getStorage('userData').then(userData => {
      if (userData) {
        this.userData = userData;
        // this.userProvider.show()
        this.userProvider.show(this.userData)
          .subscribe(res => {
            this.userData = res;
            this.userProvider.setStorage('userData', res);
          }, err => {
            console.log('Erro ao recuperar dados do usuario. ' + err.message);
          });
      } else {
        this.cancel();
      }
    });
  }
  
  cancel() {
    this.navCtrl.setRoot(HomePage);
  }
  
  editUser() {
    this.userProvider.edit(this.userData)
      .subscribe(res => {
        if (res.token) { 
          this.userData = res;
          this.userProvider.setStorage('userData', this.userData);
        } else if (res.name){
          console.log(res.name);
        } else if (res.password){
          console.log(res.password);
        } else if (res.email){
          console.log(res.email);
        } else {
          console.log("Erro ao editar usuário.");
        }
      }, err => {
        console.log("Erro ao editar usuário. " + err.message);
      })
  }
  
}