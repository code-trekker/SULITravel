export class Provider {
    name:string;
    owner: string;
    info:string;
    pictures: Array<any>;

    constructor(name:string = "Iligan Tourist Agency", owner:string= "Tony Stark",info="Tourist Agency that aims to make the most out of everything providing full tourist experience",
        pictures:Array<any> = ['https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi7256J8tPdAhWG7WEKHVCoBOgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.freelogodesign.org%2F&psig=AOvVaw3UPAadmyTCeBL1AGC_OK3W&ust=1537887109683386','https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png']){
        this.name = name;
        this.owner =owner;
        this.info = info;
        this.pictures = pictures;
    }
}
