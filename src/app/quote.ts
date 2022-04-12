export class Quote {
    id:number;
    message:string;
    upvote:number;
    downvote:number;
    author:string;
    date:any;
    showDescription!: boolean;
    constructor(id:number, message:string, author:string){
        this.id=id;
        this.message=message;
        this.upvote= 1;
        this.downvote= 0;
        this.author=author;
        this.showDescription=false;
        this.date=new Date();
    }
}
