import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Poll } from './poll.entitiy';
import { Option } from 'src/options/options.entity';
import { Vote } from 'src/vote/vote.entity';
import { Sequelize } from 'sequelize';
@Injectable()
export class PollRepository {
  constructor(
    @InjectModel(Poll)
    private readonly pollModel: typeof Poll,
  ) {}

  async createPoll(data: any, req: any) {
    const payload = { ...data, createdBy: req.user.userId };
    const poll = await this.pollModel.create(payload);
    return poll;
  }

  async getAllPolls() {
    const polls = await this.pollModel.findAll({
      include: [{ model: Option }],
    });
    return polls;
  }


  async getPollWithVotes(pollId: number) {
    return 1;
  }
}
