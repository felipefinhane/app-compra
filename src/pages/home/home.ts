import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

import { CourseProvider } from '../../providers/course/course';

import { ICourse } from '../../interfaces/ICourse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: ICourse[];

  constructor(public navCtrl: NavController, public courseProvider: CourseProvider) {
    // this.lista = this.courseProvider.all();

  }

  ionViewDidEnter() {
    this.courseProvider.allApi().subscribe(res => {
      this.lista = res;
    }, err => {
      console.log("ERROR: Consulta da API[" + err.message + "]");
    });

    // let dataIonic:ICourse = {
    //   "id":1,
    //   "title":"Curso de Ionic Android",
    //   "description":"Aprenda Ionic na pratica",
    //   "image": "https://blog.ionicframework.com/wp-content/uploads/2016/08/blog-logo.png",
    //   "price":23.93,
    //   "price_text":"23,93",
    //   "classes": [
    //     {
    //       "id":1,
    //       "ordem":1,
    //       "titulo":"Introdução ao Curso",
    //       "tempo":"10:12",
    //       "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
    //     },
    //     {
    //       "id":2,
    //       "ordem":2,
    //       "titulo":"Realizando a Instalação",
    //       "tempo":"05:34",
    //       "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
    //     }
    //   ]
    // };

    // let dataPHP:ICourse =     {
    //   "title":"Curso de PHP",
    //   "description":"Aprenda PHP na pratica",
    //   "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    //   "price": 16.99,
    //   "price_text":"16,99",
    //   "classes": [
    //     {
    //       "id":1,
    //       "ordem":1,
    //       "titulo":"Introdução ao Curso",
    //       "tempo":"10:12",
    //       "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
    //     }
    //   ]
    // };

    //ADD CURSO
    // this.courseProvider.addApi(dataIonic).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log("ERROR: Inserir na API[" + err.message + "]");
    // });

    //EDIT CURSO
    // this.courseProvider.editApi(dataIonic).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log("ERROR: Inserir na API[" + err.message + "]");
    // });

    //DELETE CURSO
    // this.courseProvider.removeApi(dataIonic).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log("ERROR: Inserir na API[" + err.message + "]");
    // });

    //SHOW CURSO
    // this.courseProvider.showApi(dataIonic).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log("ERROR: Consulta a API[" + err.message + "]");
    // });
  }

  openDetail(dataItem){
    this.navCtrl.push(DetailPage, {dataItem:dataItem});
  }

}
