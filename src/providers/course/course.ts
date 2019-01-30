import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICourse } from '../../interfaces/ICourse';

@Injectable()
export class CourseProvider {

  constructor(public http:HttpClient) {
  }

  allApi() {
    return this.http.get<ICourse[]>('http://localhost/api/courses');
  }

  showApi(data:ICourse) {
    return this.http.get<ICourse>("http://localhost:3000/courses/" + data.id);
  }

  addApi(data:ICourse) {
    return this.http.post<ICourse>('http://localhost:3000/courses', data);
  }

  editApi(data:ICourse) {
    return this.http.put<ICourse>("http://localhost:3000/courses/" + data.id, data);
  }

  removeApi(data:ICourse) {
    return this.http.delete<ICourse>("http://localhost:3000/courses/" + data.id);
  }

  // all() {
  //   let lista:ICourse[] = [
  //     {
  //       "id":1,
  //       "title":"Curso de Ionic",
  //       "description":"Aprenda Ionic na pratica",
  //       "image": "https://blog.ionicframework.com/wp-content/uploads/2016/08/blog-logo.png",
  //       "price":23.93,
  //       "price_text":"23,93",
  //       "classes": [
  //         {
  //           "id":1,
  //           "ordem":1,
  //           "titulo":"Introdução ao Curso",
  //           "tempo":"10:12",
  //           "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
  //         },
  //         {
  //           "id":2,
  //           "ordem":2,
  //           "titulo":"Realizando a Instalação",
  //           "tempo":"05:34",
  //           "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
  //         }
  //       ]
  //     },
  //     {
  //       "id":2,
  //       "title":"Curso de Angular",
  //       "description":"Aprenda Angular na pratica",
  //       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
  //       "price":45.34,
  //       "price_text":"45,34",
  //       "classes": [
         
  //       ]
  //     },
  //     {
  //       "id":3,
  //       "title":"Curso de JavaScript",
  //       "description":"Aprenda JavaScript na pratica",
  //       "image": "http://netcoders.com.br/wp-content/uploads/2015/10/js3.png",
  //       "price":19.99,
  //       "price_text":"19,99",
  //       "classes": [
  //         {
  //           "id":1,
  //           "ordem":1,
  //           "titulo":"Introdução ao Curso",
  //           "tempo":"10:12",
  //           "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
  //         },
  //         {
  //           "id":2,
  //           "ordem":2,
  //           "titulo":"Realizando a Instalação",
  //           "tempo":"05:34",
  //           "video":"https://www.youtube.com/embed/9XWhNHvGhHU"
  //         }
  //       ]
  //     }
  //   ];

  //   return lista;
  // }

}
