import { PackageItem } from './package-item';
export class Package {
    name:string;
    description:string;
    price:number = 0;
    items:Array<PackageItem>;
    pictures:Array<any>;
    per:string;
    rating: number;

    constructor(name:string = "Iligan Tipid Promo",
        rating:number = 5.0,
        price:number = 3000,
        description:string = "Trip to all Waterfalls here in Iligan City. What are you waiting for? Book Now!",
        per:string ="head",
        items:Array<PackageItem> = [new PackageItem()],
        pictures:Array<any>= ['https://www.lakwatsero.com/wp-content/uploads/2014/07/Tinago-00-1000x670.jpg']
        ){

        this.name = name;
        this.description = description;
        this.price = price;
        this.per = per;
        this.pictures =pictures;
        this.items = items;
        this.rating = rating;

    }
}
