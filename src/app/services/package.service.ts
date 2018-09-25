import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  items:Array<any> = [];
  constructor(private storage: StorageService) { 
    this.items;
    this.storage.getItem('cart').subscribe((data) => {
      this.items = data? data:[];
    });
  }

  add(data:any){
    this.items.push(data);
    this.storage.setItem('cart',this.items).subscribe((data) => {
      
    });
  }

  clear(){
    this.storage.clear().subscribe((data) => {
      
    });
  }
  
}
