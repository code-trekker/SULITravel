import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(protected localStorage: LocalStorage) {

  } 

  setItem(key:string,value){
    return this.localStorage.setItem(key, value);
  }

  removeItem(key:string){
    return this.localStorage.removeItem(key);
  }

  getItem(key:string){
    return this.localStorage.getItem(key);
  }

  clear(){
    return this.localStorage.clear();
  }
}
