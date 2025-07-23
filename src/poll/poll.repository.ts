import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Poll } from './poll.entitiy';

@Injectable()
export class PollRepository {
  constructor(
    @InjectModel(Poll)
    private readonly authModel: typeof Poll,
  ) {}

  
}