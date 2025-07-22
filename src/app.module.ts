import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Sequelize } from 'sequelize-typescript';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.entity';
import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

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
      // synchronize: true, // Only for dev!
    }),
    // Modules will go here
    AuthModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
