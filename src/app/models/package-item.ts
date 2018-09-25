export class PackageItem {
    price:number;
    name: string;
    description: string;
    pictures: Array<any>;

    constructor(
        name:string= 'Tinago Falls',
        description:string = 'Located at Iligan City',
        pictures: Array<any> = ['https://www.lakwatsero.com/wp-content/uploads/2014/07/Tinago-00-1000x670.jpg'],
        price:number = 200
    ){
        this.price = price;
        this.description = description;
        this.name = name;
        this.pictures = pictures;
        
    }

    
}
