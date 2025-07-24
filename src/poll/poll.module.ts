import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { PollService } from './poll.service';
import { Poll } from './poll.entitiy';
import { PollRepository } from './poll.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { OptionsService } from 'src/options/options.service';
import { OptionsModule } from 'src/options/options.module';
import { OptionsRepository } from 'src/options/options.repository';


@Module({
  imports : [SequelizeModule.forFeature([Poll]) , OptionsModule],
  controllers: [PollController],
  providers: [PollService , PollRepository]

})
export class PollModule {}
