import { InjectModel } from "@nestjs/sequelize";
import { Vote } from "./vote.entity";

export class VoteRepository {
      constructor(
        @InjectModel(Vote)
        private readonly voteModel: typeof Vote,
      ) {}

     async castVote(data: { option: { userId: number; pollId: number; optionId: number } }) {
    const { userId, pollId, optionId } = data.option;

    const vote = await this.voteModel.create({
      userId,
      pollId,
      optionId,
    });

    return vote;
  }

}