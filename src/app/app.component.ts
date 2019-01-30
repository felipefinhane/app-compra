import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  defaultPages: Array<{title: string, component: any}>;
  userPages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userProvider: UserProvider,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.defaultPages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Cadastro', component: FormPage }
    ];

    this.userPages = [
      { title: 'Home', component: HomePage },
      { title: 'Perfil', component: ProfilePage }
    ];

    this.userProvider.getStorage('userData').then(userData => {
      if (userData) {
        this.enableUserMenu();
      } else {
        this.enableDefaultMenu();
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  enableDefaultMenu() {
    this.menuCtrl.enable(false, 'userMenu');
    this.menuCtrl.enable(true, 'defaultMenu');
  }

  enableUserMenu() {
    this.menuCtrl.enable(true, 'userMenu');
    this.menuCtrl.enable(false, 'defaultMenu');
  }

  logout() {
    this.userProvider.setStorage('userData', null);
    this.enableDefaultMenu();
  }
}
