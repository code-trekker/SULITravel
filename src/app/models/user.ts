export class User {
    name: string = "Mark Zuckerberg";
    picture:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg";

    constructor(name:string = "Mark Zuckerberg",picture:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"){
        this.name = name;
        this.picture = picture;
    }
}
