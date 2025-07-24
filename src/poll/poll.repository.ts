import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Poll } from './poll.entitiy';
import { Request } from 'express';

@Injectable()
export class PollRepository {
  constructor(
    @InjectModel(Poll)
    private readonly pollModel: typeof Poll,
  ) {}

  async createPoll (data : any , req : any) {
    console.log(data , "dataaaa")
    const payload = {...data , createdBy : req.user.userId}
    const poll = await this.pollModel.create(payload);
    return poll;
  }

}