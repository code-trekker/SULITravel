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
    this.promos.push(new Package('Iligan Tipid Promo 1'));
    this.promos.push(new Package('Iligan Tipid Promo 2'));
    this.promos.push(new Package('Iligan Tipid Promo 3'));
    this.promos.push(new Package('Iligan Tipid Promo 4'));
    this.promos.push(new Package('Iligan Tipid Promo 5'));
    this.promos.push(new Package('Iligan Tipid Promo 6'));
    this.promos.push(new Package('Iligan Tipid Promo 7'));
   }

   view(promo){
     console.log(promo);
   }
  ngOnInit() {
   
  }

}
