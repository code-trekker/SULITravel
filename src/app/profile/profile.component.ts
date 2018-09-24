import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from    '../models/user';
import { Feedback } from '../models/feedback';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    user: User;
    rating = 4.75;
    feedbacks:Array<Feedback>;
    constructor(userService : UserService) {
        this.user = userService.user;
        this.feedbacks = [
            new Feedback(new User('Flume Banks','./assets/img/faces/clem-onojeghuo-2.jpg'),5.0,'Awesome person!'),
            new Feedback(new User('Tony Sparks','./assets/img/faces/ayo-ogunseinde-2.jpg'),4.5,'Cool person!'),
        ]
     }

    ngOnInit() {}

}
