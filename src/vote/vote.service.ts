import { Injectable } from '@nestjs/common';
import { VoteRepository } from './vote.repository';

@Injectable()
export class VoteService {
  constructor(private readonly voteRepository: VoteRepository) {}
  async castVote(data: any) {
    const { vote, optionVoteCount, pollId, optionId , totalVotes } =
      await this.voteRepository.castVote(data);
    console.log(vote, 'vote from repo');

    return { vote, optionVoteCount, pollId, optionId , totalVotes };
  }
}
