import { Component, OnInit } from '@angular/core';
import { Package } from '../models/package';
@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {
  promos:Array<Package> = [];
  constructor() {
    this.promos.push(new Package());
    this.promos.push(new Package('Iligan Tipid Promo 1',4.5));
    this.promos.push(new Package('Iligan Tipid Promo 2',4));
    this.promos.push(new Package('Iligan Tipid Promo 3',3.5));
    this.promos.push(new Package('Iligan Tipid Promo 4',3));
    this.promos.push(new Package('Iligan Tipid Promo 5',2.5));
    this.promos.push(new Package('Iligan Tipid Promo 6',2));
    this.promos.push(new Package('Iligan Tipid Promo 7',1));
   }

   view(promo){
     console.log(promo);
   }
  ngOnInit() {
   
  }

}
