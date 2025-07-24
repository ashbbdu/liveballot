import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Option } from './options.entity';
import { OptionsRepository } from './options.repository';

@Module({
  imports : [SequelizeModule.forFeature([Option])],
  providers: [OptionsService , OptionsRepository],
  controllers: [OptionsController],
  exports : [OptionsRepository]
})
export class OptionsModule {}
