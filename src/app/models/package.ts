import { PackageItem } from './package-item';
export class Package {
    name:string;
    description:string;
    price:number = 0;
    items:Array<PackageItem>;
    pictures:Array<any>;
    per:string;

    constructor(name:string = "Iligan Tipid Promo",
        description:string = "Trip to all Waterfalls here in Iligan City. What are you waiting for? Book Now!",
        price:number = 3000,
        per:string ="head",
        items:Array<PackageItem> = [new PackageItem()],
        pictures:Array<any>= ['https://www.lakwatsero.com/wp-content/uploads/2014/07/Tinago-00-1000x670.jpg']){

        this.name = name;
        this.description = description;
        this.price = price;
        this.per = per;
        this.pictures =pictures;
        this.items = items;

    }
}
