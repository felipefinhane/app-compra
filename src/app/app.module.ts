import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//PAGES
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { DetailClassPage } from '../pages/detail-class/detail-class';
import { FormPage } from '../pages/form/form';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';

//PROVIDERS
import { CourseProvider } from '../providers/course/course';
import { UserProvider } from '../providers/user/user';

//MODULES
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    DetailClassPage,
    FormPage,
    ProfilePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    DetailClassPage,
    FormPage,
    ProfilePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseProvider,
    UserProvider
  ]
})
export class AppModule {}
