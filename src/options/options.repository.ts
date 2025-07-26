import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Option } from './options.entity';
import { Vote } from 'src/vote/vote.entity';

@Injectable()
export class OptionsRepository {
  constructor(
    @InjectModel(Option)
    private readonly optionModel: typeof Option,
  ) {}
  async addOptions(data: any, user: any) {
    const optionsToCreate = data.options.map((option) => ({
      text: option.text,
      pollId: data.pollId,
    }));

    const createdOptions = await this.optionModel.bulkCreate(optionsToCreate);
    console.log('Bulk insert succeeded:', createdOptions);
    return createdOptions;
  }

  async getAllOptions () {
    const res =await this.optionModel.findAll();
    const options = await Option.findAll({
  where: { pollId: 4 },
  include: [Vote],
});
    return options;
  }
}
