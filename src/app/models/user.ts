export class User {
    name: string;
    picture:string;
    info:string;
    constructor(name:string = "Mark Zuckerberg",picture:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"
        ,info:string="I’ve learned I don’t know anything.  Have also learned that people will pay for what I know."){
        this.name = name;
        this.picture = picture;
        this.info = info;
    }
}
