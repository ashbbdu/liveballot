import { VoteRepository } from "./vote.repository";

export class VoteService  {
    constructor (private readonly voteRepository : VoteRepository) {};
    castVote (data : any) {
       return this.voteRepository.castVote(data);
    }
};