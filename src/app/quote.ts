export class Quote {
       showDescription: Boolean;
        creationTime: any;
    constructor(public quote: string, public quoteAuthor: string, public userName: string, public upvote:number, public downvote:number) {
        this.showDescription =false;
        this.creationTime = new Date().getTime();
    }
}
