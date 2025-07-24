import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Poll } from './poll.entitiy';

@Injectable()
export class PollRepository {
  constructor(
    @InjectModel(Poll)
    private readonly pollModel: typeof Poll,
  ) {}

  async createPoll (data : any) {
    const poll = await this.pollModel.create(data);
    return poll;
  }

}