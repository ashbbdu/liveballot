import { InjectModel } from '@nestjs/sequelize';
import { Vote } from './vote.entity';
import { Injectable } from '@nestjs/common';
import { Poll } from 'src/poll/poll.entitiy';
@Injectable()
export class VoteRepository {
  constructor(
    @InjectModel(Vote) private readonly voteModel: typeof Vote,
    @InjectModel(Poll) private readonly pollModel: typeof Poll,
    //  @InjectModel(Poll) private readonly pollModel: typeof Poll,
  ) {}

  async castVote(data: any) {
    const { userId, pollId, optionId } = data;
    console.log('Repository received vote:', data);
    const vote = await this.voteModel.create(data);
    
    const optionVoteCount = await this.voteModel.count({where : {pollId : pollId , optionId : optionId}})
    console.log(`${optionVoteCount} is the vote count of pollId : ${pollId} and optionId : ${optionId}` )

    if (vote) {

      const poll: any = await this.pollModel.findOne({ where: { id: pollId } });
      const currentVotes = poll?.maxVotesPerUser ?? 0;
      
         await this.pollModel.update(
        { maxVotesPerUser: currentVotes + 1 },
        {
          where: {
            id: pollId,
          },
        },
      );
    }
    const total  = await this.pollModel.findByPk(pollId);
    const totalVotes = total?.dataValues.maxVotesPerUser;
    // return vote;
     return { vote, optionVoteCount, pollId, optionId , totalVotes };
  }
}
