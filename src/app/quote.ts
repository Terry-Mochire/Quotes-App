export class Quote {
       showDescription: boolean;
    constructor(public quote: string, public quoteAuthor: string, public userName: string, public upvote:number, public downvote:number) {
        this.showDescription =false;
    }
}
