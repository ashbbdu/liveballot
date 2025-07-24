import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PollModule } from './poll/poll.module';
import { OptionsModule } from './options/options.module';
import { VoteMoudle } from './vote/vote.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ash@Compunnel09',
      database: 'liveballot-dev',
      autoLoadModels: true,
      synchronize: true, // Only for dev!
      logging : false
    }),
    // Modules will go here
    AuthModule,
    PollModule,
    OptionsModule,
    VoteMoudle
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
