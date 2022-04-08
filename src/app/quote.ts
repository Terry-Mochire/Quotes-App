export class Quote {
       
    constructor(public quote: string, public quoteAuthor: string, public upvote:number, public downvote:number) {
        this.quote=quote,
        this.quoteAuthor=quoteAuthor,
        this.upvote=upvote,
        this.downvote=downvote
    }
}
