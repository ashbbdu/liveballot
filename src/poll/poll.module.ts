import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { PollService } from './poll.service';
import { Poll } from './poll.entitiy';
import { PollRepository } from './poll.repository';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports : [SequelizeModule.forFeature([Poll])],
  controllers: [PollController],
  providers: [PollService , PollRepository]

})
export class PollModule {}
