import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from    '../models/user';
import { Feedback } from '../models/feedback';

import { PackageService } from '../services/package.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    user: User;
    rating = 4.75;
    input_rating:number;
    input_comment:string;
    
    feedbacks:Array<Feedback>;
    constructor(private userService : UserService,private packageService:PackageService) {
        this.user = this.userService.user;
        this.feedbacks = [
            new Feedback(new User('Flume Banks','./assets/img/faces/clem-onojeghuo-2.jpg'),5.0,'Awesome person!'),
            new Feedback(new User('Tony Sparks','./assets/img/faces/ayo-ogunseinde-2.jpg'),4.5,'Cool person!'),
        ]
     }

     submit(){
         console.log(this.input_rating,this.input_comment);
         this.feedbacks.push(new Feedback(
             this.user,this.input_rating,this.input_comment
         ));
         this.input_rating = 0;
         this.input_comment = "";

         console.log(this.packageService.items);
     }
     onRatingChange($event){
         this.input_rating =$event.rating;
     }
    ngOnInit() {}

}
