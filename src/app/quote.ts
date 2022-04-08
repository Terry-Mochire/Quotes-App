export class Quote {
       
    constructor(public id: number, public quote: string, public quoteAuthor: string, public upvote:number, public downvote:number) {
        this.id= id,
        this.quote=quote,
        this.quoteAuthor=quoteAuthor,
        this.upvote=upvote,
        this.downvote=downvote
    }
}
