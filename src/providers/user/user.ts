import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

import { Storage } from '@ionic/storage';

@Injectable()
export class UserProvider {

  url:string = 'http://localhost/api';

  // headers:any;

  constructor(
    public http: HttpClient,
    private storage: Storage
  ) {
    // this.headers = {
    //   "headers": {"authorization": "Bearer " + localStorage.getItem('token')}
    // }
  }

  //GET
  listAll() {
    return this.http.get<IUser[]>(this.url + '/users');
  }

  //GET with token
  show(data:IUser) {
    //LOCALSTORAGE
    return this.http.get<IUser>(
      this.url + '/user', 
      {
        "headers": {
          //LOCALSTORAGE
          //"authorization": "Bearer " + localStorage.getItem('token')
          //STORAGE
          "authorization": "Bearer " + data.token
        }
      }
    );
  }

  //POST
  add(data:IUser) {
    // return this.http.post<IUser>(this.url + this.apiMethod, data, this.headers);
    return this.http.post<IUser>(this.url + '/users', data);
  }

  //PUT
  edit(data:IUser) {
    return this.http.put<IUser>(
      this.url + '/users',
      data,
      {
        "headers": {
          "authorization": "Bearer " + data.token
        }
      });
  }

  //REMOVE
  remove(data:IUser) {
    return this.http.delete<IUser>(this.url + '/users' + data.id);
  }

  //LOGIN
  login(data:IUser) {
    return this.http.post<IUser>(this.url + '/login', data);
  }

  setStorage(key, value) {
    // set a key/value
    this.storage.set(key, value);
  }

  getStorage(key) {
    // Or to get a key/value pair
    return this.storage.get(key);
  }

}
