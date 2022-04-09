export class Quote {
    id:number;
    message:string;
    upvote:number;
    downvote:number;
    constructor(id:number, message:string, upvote:number, downvote:number ){
        this.id=id;
        this.message=message;
        this.upvote=upvote;
        this.downvote=downvote;
    }
}
