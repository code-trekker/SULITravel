import { User } from './user';

export class Feedback {
    user:User;
    rating:number;
    comment:string;

    constructor(user:User = new User(), rating: number = 5.0,comment: string = "Awesome!"){
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
}
