import { PackageItem } from './package-item';
export class Package {
    name:string;
    price:number = 0;
    items:Array<PackageItem>;
    pictures:Array<any>;
}
