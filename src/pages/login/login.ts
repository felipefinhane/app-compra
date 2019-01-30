import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IUser } from '../../interfaces/IUser';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  
  userData:IUser = {
    email: '',
    password: ''
  };
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {

  }
  
  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

  enableMenuLogin() {
    this.menuCtrl.enable(true, 'userMenu');
    this.menuCtrl.enable(false, 'defaultMenu');
  }
  
  loginUser() {
    this.userProvider.login(this.userData)
      .subscribe(res => {
        if (res.token) { 
          this.userProvider.setStorage('userData', res);
          // localStorage.setItem('token', res.token)
          this.enableMenuLogin();
          this.cancel();
        } else if (res.password){
          console.log("Erro ao efetuar o login. " + res.password);
        } else if (res.email){
          console.log("Erro ao efetuar o login. " + res.email);
        } else {
          console.log("Usuários ou senha inválidos.");
        }
      }, err => {
        console.log("Erro ao efetuar o login. " + err.message);
      })
  }
  
}